# Norwegian-language local AI feasibility (issue #4)

**Question:** Can Heima-boksen run a local AI assistant and photo search that are good enough in Norwegian, in both bokmål and nynorsk, at a consumer price, power draw and noise level?

**Date of research:** 2026-11-12. **Method:** primary sources only where possible: model cards and the Hugging Face API, the EuroEval Norwegian leaderboard data file, the NorEval paper, Språkrådet's own test slides, vendor datasheets and support pages, and maintained benchmark threads. Anything I could not trace to a primary source is marked **(unverified)**. Anything I calculated myself is marked **(estimate)**.

---

## 1. Short answer

**Yes for photo search and bokmål chat. Nynorsk is a "maybe" that the spike has to measure. Price, not power or noise, is the hardest constraint.**

- **Photo search in Norwegian works today** with commercially licensed models. On Immich's own Norwegian benchmark (Crossmodal-3600), the best Apache/MIT-licensed models reach about 75% recall, against 81% for the best model overall, which is non-commercial. ([Immich searching docs](https://docs.immich.app/features/searching))
- **A 4–12B model on a 32 GB mini PC gives usable bokmål chat at roughly 10–20 tokens/s.** The best open small models in Norwegian are now Google's Gemma 4 family, which is Apache-2.0. ([EuroEval NO leaderboard](https://euroeval.com/leaderboards/Monolingual/norwegian/), [Gemma 4 E4B card](https://huggingface.co/google/gemma-4-E4B-it))
- **Nynorsk is the weak spot for every model, including frontier cloud models.** Språkrådet's manual test counted 2.3–3.4 errors per 100 words in nynorsk, against 1.3–2.2 in bokmål. ([Språkrådet slides, Dec 2025](https://www.mn.uio.no/ifi/english/research/groups/ltg/251211/07-kristine.pdf)) Small models show a larger bokmål→nynorsk drop than large ones (section 2.3).
- **Power and noise are solved problems.** Fanless Ryzen AI 300 mini PCs exist ([Notebookcheck on the Arctic Senza AI 370](https://www.notebookcheck.net/Arctic-readies-Senza-AI-370-under-desk-silent-mini-PC-powered-by-AMD-s-Ryzen-AI-9-HX-370.1255011.0.html)). Fan-cooled ones idle at 7–9 W and run at about 35–40 dBA ([ServeTheHome SER9 review](https://www.servethehome.com/beelink-ser9-amd-ryzen-ai-9-hx-370-mini-pc-review/4/)).
- **Price is the real risk.** The 2026 DRAM/NAND shortage has pushed up every candidate platform:
  - Jetson modules rose 33–101% ([CNX Software, Jul 2026](https://www.cnx-software.com/2026/07/22/nvidia-increases-the-price-of-jetson-modules-and-devkits-by-up-to-101/)).
  - The entry Mac mini rose from $599 to $899 ([Macworld, Aug 2026](https://macworld.com/article/3220063/apple-launches-new-m6-mac-mini-with-another-price-hike.html)).
  - TrendForce still expects DRAM +10–15% and NAND +15–20% quarter-on-quarter in 4Q26 ([TrendForce, 30 Sep 2026](https://www.trendforce.com/presscenter/news/20260930-13258.html)).
  - A capable box (32 GB RAM, 2 TB) lands around USD 700–1,100 per unit **(estimate, section 8)**. That is roughly 3–7 years of a 149–199 kr/month subscription before any other cost.

---

## 2. Norwegian-capable open LLMs

### 2.1 What the leaderboards say (EuroEval Norwegian, data pulled 2026-11-12)

EuroEval is the maintained successor of ScandEval. Its Norwegian generative leaderboard ranks models across these tasks:

- NoReC sentiment
- NorNE NER, bokmål and nynorsk
- ScaLA linguistic acceptability, bokmål and nynorsk
- NorQuAD reading comprehension
- NoSammendrag summarisation
- NRK Quiz QA knowledge
- Idioms-no
- NorCommonSenseQA

Evaluation is few-shot unless marked zero-shot. "Rank" is a tier computed from the mean rank score, so lower is better. ([EuroEval NO leaderboard](https://euroeval.com/leaderboards/Monolingual/norwegian/), [leaderboard methodology README](https://raw.githubusercontent.com/EuroEval/EuroEval/main/src/frontend/md/leaderboards-README.md), [Norwegian dataset docs](https://raw.githubusercontent.com/EuroEval/EuroEval/main/src/frontend/md/datasets/norwegian.md))

I extracted the numbers from the leaderboard's data module (`/assets/norwegian_generative-*.js`, loaded by the page above). Each score below is the primary score as published.

| Model (open weights) | Params | Rank tier | ScaLA-nb | **ScaLA-nn** | NRK Quiz | Idioms | CommonSense | Licence |
|---|---|---|---|---|---|---|---|---|
| *ref:* gemma-4-31B-it | 31B | 4 | 68.3 | 70.1 | 65.1 | 58.5 | 89.1 | Apache-2.0 |
| **gemma-4-26B-A4B-it** (MoE, ~4B active) | 26B | 6 | 63.1 | 59.7 | 58.8 | 48.1 | 86.4 | Apache-2.0 |
| **gemma-4-12B-it** | 12B | 8 | 62.6 | 60.3 | 44.0 | 32.3 | 85.0 | Apache-2.0 |
| gemma-3-12b-it | 12B | 11 | 63.4 | 50.2 | 43.5 | 22.5 | 78.3 | Gemma |
| NbAiLab/borealis-12b | 12B | 12 | 62.0 | 48.0 | 45.5 | 23.4 | 76.1 | NB-licence + Gemma |
| Qwen3.5-9B | 9.7B | 14 | 56.4 | 41.5 | 47.2 | 40.7 | 88.1 | Apache-2.0 |
| **gemma-4-E4B-it** | 8B (4.5B eff.) | 14 | 52.0 | 40.0 | 36.9 | 18.2 | 76.0 | Apache-2.0 |
| Ministral-3-8B-Instruct-2512 | 7.4B | 15 | 58.2 | 46.4 | 37.1 | 23.8 | 65.3 | Apache-2.0 |
| Qwen3-8B (no-thinking) | 8.2B | 16 | 48.2 | 27.7 | 30.6 | 11.0 | 69.5 | Apache-2.0 |
| NbAiLab/borealis-4b | 4.3B | 19 | 29.2 | 16.4 | 30.4 | 4.8 | 60.6 | NB-licence + Gemma |
| Qwen3.5-4B | 4.7B | 19 | 43.1 | 23.3 | 38.8 | 31.3 | 76.8 | Apache-2.0 |
| Llama-3.1-8B-Instruct | 8B | 19 | 27.5 | 15.0 | 32.7 | 10.0 | 61.7 | Llama 3.1 |
| NorMistral-11B-thinking | 11.4B | unranked | 10.7 | 16.6 | 33.0 | 6.2 | 42.1 | Apache-2.0 |

Source for every row: the [EuroEval NO leaderboard](https://euroeval.com/leaderboards/Monolingual/norwegian/). Licence sources:
- Apache-2.0 and Llama licence tags come from the Hugging Face model API (e.g. [gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it), [Qwen3.5-9B](https://huggingface.co/Qwen/Qwen3.5-9B)).
- Borealis: see 2.2.
- NorMistral: [LTG page](https://www.mn.uio.no/ifi/english/research/groups/ltg/llms-for-norwegian/).

**What this tells us**

- **Gemma 4 is the best small open family for Norwegian.**
  - gemma-4-12B-it sits in tier 8, the same tier as gpt-5-mini and gemma-3-27b-it.
  - gemma-4-26B-A4B sits in tier 6, alongside Claude Sonnet 4.6 and Qwen3.6-27B.
  - Both are Apache-2.0. ([EuroEval](https://euroeval.com/leaderboards/Monolingual/norwegian/), [Gemma 4 card](https://huggingface.co/google/gemma-4-E4B-it))
  - The 26B-A4B is a mixture-of-experts model with 3.8B active parameters, so it decodes at about the speed of a 4B model ([Gemma 4 card](https://huggingface.co/google/gemma-4-E4B-it)). It needs about 17 GB at Q4_K_M ([unsloth GGUF listing](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)), so it only fits a 32 GB box.
- **The Norwegian-specific fine-tunes do not beat their newer multilingual bases on this benchmark.**
  - Borealis-12b is built on Gemma 3 12B ([card](https://huggingface.co/NbAiLab/borealis-4b)) and scores at or below gemma-3-12b-it, and clearly below gemma-4-12B-it.
  - The NB itself says Borealis targets Norwegian-centric assistant behaviour rather than universal benchmark performance ([NB AI-lab Borealis post](https://ai.nb.no/borealis/)).
- **NorMistral-11B-thinking scores poorly on EuroEval** but does well on human-judged nynorsk (2.3 below). My guess is that the few-shot format conflicts with its `<think>` output **(unverified)**. Either way, EuroEval is not a reliable read on this model.
- **Use smaller models only with care.**
  - Below about 8B, nynorsk acceptability collapses: ScaLA-nn is 16–23 for Borealis-4b and Qwen3.5-4B.
  - gemma-4-E4B (40.0) and Ministral-3-8B (46.4) are the best of the fast tier.

### 2.2 Norwegian institutional models

| Model | What it is | Licence / commercial use | Notes |
|---|---|---|---|
| **Borealis** (NB AI-lab, released 26 May 2026) | Gemma-3-based instruct models in 270M / 1B / 4B / 12B / 27B. Each size has a "full" variant (adds about 10k newspaper-derived tasks) and an "open" variant. ([NB post](https://ai.nb.no/borealis/), [borealis-4b card](https://huggingface.co/NbAiLab/borealis-4b)) | The full variants use the NB-licence, an Apache-2.0 adaptation with use restrictions, plus the Gemma 3 Terms. Commercial use is allowed, but you may not: try to recreate training data; offer services whose primary purpose is access to the licensed press content; or **use NB's or rights-holders' names to promote derivatives without written permission**. The open variants use the Gemma licence. ([LICENSE](https://huggingface.co/NbAiLab/borealis-4b/raw/main/LICENSE), [LICENSE_FAQ.pdf](https://huggingface.co/NbAiLab/borealis-4b/resolve/main/LICENSE_FAQ.pdf)) | Official GGUFs exist: borealis-4b Q4_K_M 2.49 GB, borealis-12b Q4_K_M 7.3 GB ([4b-gguf](https://huggingface.co/NbAiLab/borealis-4b-gguf), [12b-gguf](https://huggingface.co/NbAiLab/borealis-12b-gguf)). The card says it is not a reasoning model. Image input is inherited from Gemma 3 (pipeline `image-text-to-text`). |
| **NB-Llama 3.x** (2024) | Llama 3.1 8B / 3.2 1B–3B fine-tunes covering bokmål, nynorsk and English ([card](https://huggingface.co/NbAiLab/nb-llama-3.1-8B-Instruct)) | Llama 3.1/3.2 Community Licence | The card calls it a research release, says its Norwegian knowledge is "uneven", and reports no benchmarks. It is superseded by Borealis. |
| **NorMistral-11B-thinking** (UiO LTG, released 11 Dec 2025) | Mistral-Nemo-12B continually pre-trained on about 250B Norwegian tokens, then post-trained. Covers bokmål, nynorsk and Northern Sámi. ([LTG page](https://www.mn.uio.no/ifi/english/research/groups/ltg/llms-for-norwegian/), [card](https://huggingface.co/norallm/normistral-11b-thinking)) | Apache-2.0, which allows commercial use. LTG nevertheless calls it a "research prototype", and Språkrådet's slide describes it as "Academia, not intended for full commercial use". ([slides](https://www.mn.uio.no/ifi/english/research/groups/ltg/251211/07-kristine.pdf)) | GGUF available: Q4_K_M 6.9 GB. Emits `<think>` traces. The card warns that the repetition penalty must be off. ([card](https://huggingface.co/norallm/normistral-11b-thinking)) |
| **NorMistral-11B-translate** | Translates between bokmål, nynorsk and English in all six directions ([card](https://huggingface.co/norallm/normistral-11b-translate)) | Apache-2.0 | A possible "write in bokmål, translate to nynorsk" pipeline stage. No quality numbers are published. |
| **NorBERT 3/4** (LTG), **NB-BERT** (NB) | Encoder models for classification and NER, not chat | NorBERT: Apache-2.0. NB-BERT-large: CC-BY-4.0. ([HF API: ltg/norbert4-base](https://huggingface.co/ltg/norbert4-base), [NbAiLab/nb-bert-large](https://huggingface.co/NbAiLab/nb-bert-large)) | Useful for cheap on-box extraction tasks, e.g. classifying letter types. |

### 2.3 Nynorsk evidence specifically

1. **Språkrådet's manual test (April/May 2025, about 68,600 tokens, 40 texts per chatbot).** The test counted spelling, grammar and text errors per 100 words. ([Språkrådet slides, LTG seminar 11 Dec 2025](https://www.mn.uio.no/ifi/english/research/groups/ltg/251211/07-kristine.pdf))

   | Errors / 100 words | ChatGPT | MS Copilot | Le Chat | NorMistral-11B |
   |---|---|---|---|---|
   | Bokmål | 1.5 | 1.3 | 2.2 | 1.3 |
   | **Nynorsk** | 2.6 | 2.4 | 3.4 | **2.3** |

   - The error types Språkrådet lists are exactly what families will notice: bokmål words inside nynorsk text ("dukkene og bamsane fann saman"), preposed possessives, wrong gender, and anglicisms.
   - Språkrådet's board minutes reportedly concluded that all four models make too many errors, especially in nynorsk ([board minutes, Oct 2025](https://sprakradet.no/wp-content/uploads/Protokoll-fra-styremote-16.-oktober-2025.pdf); **unverified**: this comes from a search snippet because the PDF could not be fetched).
   - Caveat: this test predates the Gemma 4 and Borealis releases.
2. **NorEval (ACL Findings 2025).** NorEval has 24 datasets with separate bokmål and nynorsk splits. ([arXiv 2504.07749](https://arxiv.org/abs/2504.07749))
   - Models score consistently lower in nynorsk. On NorCommonsenseQA, nynorsk ranges from 32.6 (Mistral-7B) to 51.6 (NorMistral-11B), against 41.2–61 in bokmål.
   - Instruction-tuned models asked to translate English→nynorsk **copied the input in 44% of cases** and switched language in 12%.
   - NorEval ships in lm-evaluation-harness, so the spike can rerun it on new models.
3. **LTG's preliminary NorEval table on the NorMistral-11B-thinking card.** ([card](https://huggingface.co/norallm/normistral-11b-thinking))
   - NorMistral leads on nynorsk idioms (27.7 vs 23.7 for Gemma3-12B) and on NRK-quiz nynorsk (62.3 vs 58.4).
   - Gemma3-12B wins clearly on generation: rewrite win-rate 86.8 vs 51.9, summarise 77.8 vs 54.3, both judged by Llama-3.3-70B.
4. **EuroEval ScaLA-nn vs ScaLA-nb (table 2.1).**
   - The bokmål→nynorsk drop is small for gemma-4-12B (62.6→60.3).
   - It is large for Qwen3.5-9B (56.4→41.5), gemma-4-E4B (52.0→40.0) and Qwen3-8B (48.2→27.7).
   - So nynorsk *grammaticality judgement* degrades fastest in small and non-European-trained models.
   - Note that ScaLA tests judgement, not generation. ([dataset docs](https://raw.githubusercontent.com/EuroEval/EuroEval/main/src/frontend/md/datasets/norwegian.md))

**Takeaway:** no benchmark directly measures "does a 4–12B model write correct nynorsk to a family". The only generation-quality evidence (Språkrådet) points to NorMistral or frontier-class quality being about 2.3 errors per 100 words, or one error every two to three sentences. The spike must run its own Språkrådet-style count on the candidate models (section 9).

---

## 3. Photo search with Norwegian queries, and face clustering

### 3.1 Image-text (CLIP-style) models

Immich publishes a **Norwegian** zero-shot retrieval benchmark on Crossmodal-3600. Recall is the mean of R@1, R@5 and R@10. Memory and time are f32 on a 7800X3D CPU. ([Immich searching docs](https://docs.immich.app/features/searching))

| Model (Immich name) | NO recall | Exec. time (ms) | Peak RAM (MiB) | Licence | Commercial? |
|---|---|---|---|---|---|
| nllb-clip-large-siglip__mrl | **81.4%** | 75 | 4,248 | CC-BY-NC-4.0 ([card](https://huggingface.co/visheratin/nllb-siglip-mrl-large)) | **No** |
| nllb-clip-base-siglip__mrl | 77.7% | 17 | 4,696 | CC-BY-NC-4.0 (same author/family) | **No** |
| XLM-Roberta-Large-ViT-H-14 (LAION) | 75.4% | 39 | 4,014 | MIT ([card](https://huggingface.co/laion/CLIP-ViT-H-14-frozen-xlm-roberta-large-laion5B-s13B-b90k)) | Yes |
| **ViT-SO400M-16-SigLIP2-384** (Google) | 75.0% | 57 | 3,854 | Apache-2.0 ([timm](https://huggingface.co/timm/ViT-SO400M-16-SigLIP2-384), [google](https://huggingface.co/google/siglip2-so400m-patch16-384)) | Yes |
| ViT-SO400M-16-SigLIP2-256 | 74.4% | 28 | 3,611 | Apache-2.0 ([timm](https://huggingface.co/timm/ViT-SO400M-16-SigLIP2-256)) | Yes |
| XLM-Roberta-Base-ViT-B-32 (LAION) | 67.8% | 3 | 3,030 | MIT ([card](https://huggingface.co/laion/CLIP-ViT-B-32-xlm-roberta-base-laion5B-s13B-b90k)) | Yes |
| English-only SigLIP ViT-B-16 | 35.0% | 6 | 1,081 | – | – |

- **Recommendation:** use SigLIP2-SO400M-256 or XLM-R-Large-H-14. They are about 6 points of recall behind the non-commercial NLLB models.
- Immich notes that NLLB models expect the query in the user's configured language, whereas xlm and siglip2 models handle mixed-language queries ([docs](https://docs.immich.app/features/searching)). That flexibility suits families who mix bokmål, nynorsk, dialect and English.
- A newer candidate is MEXMA-SigLIP2 (MIT, about 1B parameters). It claims state-of-the-art on Crossmodal-3600 (62.5% image R@1), but its 80-language list and Norwegian score are **unverified** ([card](https://huggingface.co/visheratin/mexma-siglip2)).

**The example query needs more than CLIP.** In *"bestemor på hytta sommaren 2019"* (note *sommaren* is nynorsk), only "på hytta" is a visual concept:
- "bestemor" is a **named person cluster**;
- "sommaren 2019" is an **EXIF date range**.

Immich's search already exposes person ("faces"), date-range and location filters next to contextual (CLIP) search ([Immich searching docs](https://docs.immich.app/features/searching)). The docs do not say explicitly that all of them combine in a single query, so verify that in the spike. If they do, the local LLM only has to parse a Norwegian query into structured filters plus a CLIP phrase. That is a small, testable task that a 4B model can likely do **(estimate)**.

### 3.2 Face detection and clustering

- Immich clusters faces with a DBSCAN-derived incremental algorithm, using tunable distance and minimum-faces thresholds ([Immich facial recognition docs](https://docs.immich.app/features/facial-recognition)). It ships InsightFace `buffalo_l` models ([immich-app/buffalo_l](https://huggingface.co/immich-app/buffalo_l)).
- **Licence blocker:** InsightFace states that its pretrained models are "for non-commercial research purposes only" and require separate commercial licensing ([InsightFace README](https://github.com/deepinsight/insightface/blob/master/README.md), [python-package README](https://github.com/deepinsight/insightface/blob/master/python-package/README.md)). Immich's earlier README mentioned a permission email from 2023, but its scope is **unverified**. A commercial ISP product must either buy an InsightFace licence or swap to permissively licensed models such as OpenCV YuNet (MIT) for detection and SFace (Apache-2.0) for recognition ([opencv_zoo SFace](https://github.com/opencv/opencv_zoo/tree/main/models/face_recognition_sface), [YuNet](https://github.com/opencv/opencv_zoo/tree/main/models/face_detection_yunet)). Accuracy of that swap is untested.
- Face embeddings are biometric data, and processing them for identification is restricted under GDPR Art. 9 ([GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj)). Whether the household exemption covers an ISP-supplied device needs legal review **(unverified)**.

---

## 4. OCR and document understanding (NAV, Skatteetaten, contracts)

I found **no public Norwegian document-OCR benchmark**, so every option here needs an in-house test set.

| Option | Licence | Norwegian evidence | Fit |
|---|---|---|---|
| **Vision LLM directly**: Gemma 4 E4B/12B, Qwen3.5-4B/9B | Apache-2.0 ([Gemma 4](https://huggingface.co/google/gemma-4-E4B-it), [Qwen3.5-9B](https://huggingface.co/Qwen/Qwen3.5-9B)) | All Gemma 4 sizes take image input. Qwen3.5 has a vision encoder and claims 201 languages. Neither publishes Norwegian OCR scores. | One model does read, explain and extract deadlines. This is the simplest box design. |
| **Tesseract** `nor` traineddata | Apache-2.0 ([tessdata_best](https://github.com/tesseract-ocr/tessdata_best)) | Has a dedicated Norwegian model | Cheap and CPU-only. Weak on photos of paper; good on clean scans. |
| **PaddleOCR-VL-1.6** (0.96B, May 2026) | Apache-2.0 ([HF](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)) | Claims 109 languages ([arXiv 2510.14528](https://arxiv.org/abs/2510.14528)). Norwegian not explicitly confirmed **(unverified)**. | Strong layout and table parsing; feed its output to the LLM. |
| **Granite-Docling-258M** | Apache-2.0 ([HF](https://huggingface.co/ibm-granite/granite-docling-258M)) | English-primary; multilingual support is "experimental" ([IBM](https://www.ibm.com/granite/docs/models/docling)) | Fallback only. |

**Recommendation for the spike:**
1. Use OCR (PaddleOCR-VL or Tesseract-nor) → text → the LLM explains, with the extracted text kept as grounding.
2. Compare that with "VLM reads the photo directly" on 30–50 real letters.
3. For document search and RAG, embed the OCR text with a permissive multilingual embedder:
   - BGE-M3 (MIT)
   - Qwen3-Embedding-0.6B (Apache-2.0)
   - multilingual-e5-large-instruct (MIT)
   - NbAiLab nb-sbert-base (Apache-2.0)

   (licences from the [HF API](https://huggingface.co/BAAI/bge-m3)). EmbeddingGemma-300m uses the Gemma licence and is gated ([HF](https://huggingface.co/google/embeddinggemma-300m)).
4. The Scandinavian Embedding Benchmark covers bokmål and nynorsk ([arXiv 2406.02396](https://arxiv.org/abs/2406.02396)), but I could not retrieve a current Norwegian ranking of these specific models **(unverified)**.

---

## 5. Speech-to-text for dialects (optional voice feature)

- **NB-Whisper** (National Library) comes in tiny 39M, base 74M, small 244M, medium 769M and large 1.55B, plus "verbatim" variants. ([card](https://huggingface.co/NbAiLab/nb-whisper-large))
  - Apache-2.0.
  - Available as whisper.cpp/ggml (including q5_0) and ONNX.
  - Outputs bokmål (`no`) or **nynorsk (`nn`)**.
  - Trained on NST, Stortinget transcripts, NRK subtitles and audiobooks.
- **Accuracy:** on Fleurs bokmål, WER fell from 10.4 (Whisper large-v3) to 6.6; on NST, from 6.8 to 2.2. Because Norwegian allows multiple correct spellings, the authors put the best achievable WER at about 1–2%. ([arXiv 2402.01917](https://arxiv.org/abs/2402.01917))
- A distilled large "turbo" beta (756M parameters) exists ([card](https://huggingface.co/NbAiLab/nb-whisper-large-distil-turbo-beta)).
- **Gaps:**
  - **No per-dialect WER is published**, so dialect quality (Trøndersk, Nordnorsk, Vestlandsk) is **unverified**.
  - Språkrådet explicitly lists dialects in speech recognition as a quality criterion ([slides](https://www.mn.uio.no/ifi/english/research/groups/ltg/251211/07-kristine.pdf)).
  - Gemma 4 E4B/12B accept audio input ([card](https://huggingface.co/google/gemma-4-E4B-it)), but their Norwegian ASR quality is **unverified**.
- **Verdict:** voice is plausible with NB-Whisper small or medium on-box. Treat it as a v1.5 feature and test it with dialect recordings from pilot households.

---

## 6. Candidate hardware

LLM decode speed is mostly bounded by memory bandwidth: the model's weights are read once per token. A 7–8B Q4 model is about 4.7–5 GB.

| Platform | Unit cost (Nov 2026) | Power | Measured decode, 7–9B Q4 | Fanless? | Notes |
|---|---|---|---|---|---|
| **AMD Ryzen AI 300/400 mini PC** (Radeon 890M iGPU, XDNA2 NPU) | Arctic Senza AI 370, 32 GB: **€1,199.99** ([Notebookcheck](https://www.notebookcheck.net/Arctic-readies-Senza-AI-370-under-desk-silent-mini-PC-powered-by-AMD-s-Ryzen-AI-9-HX-370.1255011.0.html)). Beelink SER9, 32 GB/1 TB: $999 ([STH](https://www.servethehome.com/beelink-ser9-amd-ryzen-ai-9-hx-370-mini-pc-review/4/)). ASUS PN55 (Ryzen AI 400): about $1,099 (secondary source, **unverified**). | SER9: 7–9 W idle, ~78 W under sustained load, 35 / 40 dBA at 1 m ([STH](https://www.servethehome.com/beelink-ser9-amd-ryzen-ai-9-hx-370-mini-pc-review/4/)) | Qwen3-8B Q4_K_M, Vulkan: **13.4 tok/s** (DDR5-5600, 89.6 GB/s) ([Framework 13 test, Feb 2026](https://msf.github.io/blogpost/local-llm-performance-framework13.html)). On the NPU via FastFlowLM (HX 470): **11.5 tok/s** at 1K context, 6.0 at 32K ([LinuxLinks, Sep 2026](https://www.linuxlinks.com/bosgame-vta-439-running-llms-ryzen-ai-9-hx-470-npu/)). | **Yes** (Arctic Senza; SolidRun Bedrock RAI300 ([Notebookcheck](https://www.notebookcheck.com/RAI300-Die-Power-des-AMD-Ryzen-AI-9-HX-370-gibt-es-auch-mit-passiver-Kuehlung.1209049.0.html))) | NPU LLM inference now works on Linux through Lemonade/FastFlowLM. The NPU kernels are closed-source but free for commercial use, with attribution required ([FastFlowLM README](https://github.com/FastFlowLM/FastFlowLM)). The NPU frees the iGPU for CLIP and faces. |
| **Intel Core Ultra (Panther Lake, series 3)** | Mini PCs announced (MSI Cubi NUC AI+ 3MG, ASUS NUC 16 Pro, Khadas Mind Pro) ([Tom's HW](https://www.tomshardware.com/desktops/mini-pcs/msi-cubi-nuc-ai-3mg-review)) | – | **No verified 8B tok/s figure found** | Not found | Immich ML runs on OpenVINO for Intel iGPUs ([Immich HW accel](https://docs.immich.app/features/ml-hardware-acceleration)). Worth a second spike unit if AMD disappoints. |
| **NVIDIA Jetson Orin Nano Super** (8 GB) | Devkit **$249 → $399**; module 8 GB $299 → $399 (1k units) ([CNX, Jul 2026](https://www.cnx-software.com/2026/07/22/nvidia-increases-the-price-of-jetson-modules-and-devkits-by-up-to-101/)) | 7 / 15 / 25 W modes ([NVIDIA blog](https://developer.nvidia.com/blog/nvidia-jetson-orin-nano-developer-kit-gets-a-super-boost/)) | Llama 3.1 8B INT4: **19.1 tok/s**; Qwen2.5 7B: 21.8 (MLC) ([NVIDIA](https://developer.nvidia.com/blog/nvidia-jetson-orin-nano-developer-kit-gets-a-super-boost/)) | Possible at 7–15 W (passive enclosures exist, **unverified**) | **8 GB shared memory is too small** for an 8B LLM plus CLIP plus Immich at once. CUDA is the most reliable Immich backend ([docs](https://docs.immich.app/features/ml-hardware-acceleration)). |
| **NVIDIA Jetson Orin NX 16 GB** | Module **$599 → $999** (1k units) ([CNX](https://www.cnx-software.com/2026/07/22/nvidia-increases-the-price-of-jetson-modules-and-devkits-by-up-to-101/)) | 10–40 W (secondary source) | No primary figure found | Possible | The module alone now costs more than a complete x86 mini PC. Not competitive. |
| **Rockchip RK3588** boards | Orange Pi 5 Ultra 16 GB: $125 at launch → **$309** (Apr 2026); ROCK 5B+ 8 GB $129.99, sold out ([CNX, Apr 2026](https://www.cnx-software.com/2026/04/28/what-a-difference-two-years-make-comparing-sbc-prices-in-2024-and-2026/)) | ~5–15 W (**unverified**) | NPU W8A8: Qwen3.5-9B **3.2 tok/s**, Qwen3.5-4B 5.2, Qwen3.5-2B 11.0 ([Qengineering, Rock 5C](https://huggingface.co/Qengineering/Qwen3.5-9B-rk3588)) | Yes | Too slow for a 9B chat model; 4B is borderline. Immich supports RKNN ([docs](https://docs.immich.app/features/ml-hardware-acceleration)). The RK1828 add-on accelerator claims 59–180 tok/s on 3–7B, but its devkit costs $1,029 ([CNX](https://www.cnx-software.com/2025/12/30/rockchip-rk1820-rk1828-so-dimm-and-m-2-llm-vlm-ai-accelerator-modules-devkits-and-benchmarks/)). |
| **Apple silicon** (Mac mini M6, 16 GB) | **$899** (from $599 for the M4 earlier in 2026) ([Macworld](https://macworld.com/article/3220063/apple-launches-new-m6-mac-mini-with-another-price-hike.html)) | 4 W idle, 70 W max ([Apple](https://support.apple.com/en-us/103253)) | 7B Q4_0: M4 24.1 tok/s, **M6 35.7 tok/s** ([llama.cpp #4167](https://github.com/ggml-org/llama.cpp/discussions/4167)) | Near-silent (has a fan) | Best performance per watt, but it cannot be white-labelled or put in a wooden shell, and it runs macOS. Use it as a **benchmark reference only** (assessment). |
| **Qualcomm** (Dragonwing IQ9/IQ8, Snapdragon X2 Elite mini PCs) | ASUS Ascent QN10, X2 Elite ([CNX, Sep 2026](https://www.cnx-software.com/2026/09/18/asus-ascent-qn10-mini-pc-is-powered-by-qualcomm-snapdragon-x2-elite-18-core-armv9-processor/)); price not found | – | IQ-9075: "Llama 2 7B up to 22 tok/s" (vendor claim) ([Qualcomm](https://www.qualcomm.com/internet-of-things/products/iq9-series/iq-9075)). IQ-8275: Gemma 4 E2B ~28 tok/s on NPU, needs a Linux patch ([Qualcomm docs](https://dragonwingdocs.qualcomm.com/tutorials/gemma-litert-lm-on-iq8)) | Possible | The software stack (Genie / LiteRT / QNN) is the least mature for llama.cpp and Immich. Skip for the spike. |

**Memory budget for the full Heima stack (estimate):**

| Component | Size | Source |
|---|---|---|
| Immich + Postgres | ≥ 6–8 GB recommended for Immich overall | [Immich requirements](https://docs.immich.app/install/requirements) |
| CLIP | ~3.6–4 GB at f32 | [Immich searching docs](https://docs.immich.app/features/searching) |
| LLM: Gemma 4 E4B Q4_K_M | 5.0 GB | [GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF) |
| LLM: 12B Q4_K_M | ~7.3 GB | [borealis-12b-gguf](https://huggingface.co/NbAiLab/borealis-12b-gguf) |
| LLM: Gemma 4 26B-A4B Q4_K_M | 17 GB | [GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF) |
| Whisper | ~1–2 GB | – |

- **16 GB** fits E4B, or 12B tightly.
- **32 GB** is needed for 26B-A4B or for comfortable concurrency.

**Speed estimates for a 12B Q4 model (estimate):**
- On the 890M, 12B Q4 should decode at about 9 tok/s with DDR5-5600, or about 13 tok/s with LPDDR5X-8000. I scaled the measured Qwen3-8B result by model size and bandwidth.
- 26B-A4B should be faster than 12B because only ~4B parameters are active. This is unmeasured.

**Energy (estimate):** at ~10 W average the box uses about 88 kWh/year, a small fraction of a Norwegian household's electricity use.

---

## 7. Recommended reference setup for the spike

**Hardware (buy 2–3 units):**
1. **Primary:** an AMD Ryzen AI 9 HX 370/470 mini PC with **32 GB LPDDR5X (≥7500 MT/s)** and a 2 TB NVMe SSD, fan-cooled (e.g. Beelink SER9-class). Running Ubuntu/Debian is consistent with Immich's Linux recommendation ([Immich requirements](https://docs.immich.app/install/requirements)).
2. **Noise/thermal twin:** an **Arctic Senza AI 370** (fanless, 32 GB, €1,199.99). Use it to measure sustained throttling while indexing a 50k-photo library and chatting at the same time.
3. *Optional baseline:* a Mac mini M6 16 GB ($899) as a speed and power ceiling for llama.cpp. *Optional floor:* a Jetson Orin Nano Super ($399), to confirm that 8 GB is too small.

**Software and models:**

| Function | Primary | Challenger(s) |
|---|---|---|
| Runtime | llama.cpp (Vulkan) / Ollama; Lemonade + FastFlowLM for the NPU | – |
| Assistant LLM (32 GB box) | **gemma-4-26B-A4B-it** Q4_K_M | gemma-4-12B-it; **NorMistral-11B-thinking** (nynorsk); **Borealis-12b**; Qwen3.5-9B |
| Assistant LLM (16 GB fallback) | **gemma-4-E4B-it** | Ministral-3-8B; Borealis-4b |
| Nynorsk post-editing (experiment) | NorMistral-11B-translate (bokmål→nynorsk) | Apertium nno-nob (rule-based, **GPL-2.0**) ([repo](https://github.com/apertium/apertium-nno-nob)) |
| Photo search (CLIP) | **ViT-SO400M-16-SigLIP2-256** (Apache-2.0) | XLM-Roberta-Large-ViT-H-14 (MIT); nllb-clip-base-siglip (non-commercial, quality ceiling only) |
| Query parsing | The assistant LLM turns Norwegian queries into person + date + place + CLIP-phrase filters | – |
| Faces | Immich default (buffalo_l) for the *pilot only* | YuNet + SFace (permissive) to measure the licence-safe accuracy gap |
| Documents | PaddleOCR-VL-1.6 → LLM | Gemma 4 vision reads the photo directly; Tesseract-nor |
| Doc embeddings | BGE-M3 | Qwen3-Embedding-0.6B, nb-sbert-base |
| Voice (stretch) | NB-Whisper small/medium (ggml), `nn` output option | NB-Whisper distil-turbo beta |

---

## 8. Per-unit hardware cost (estimate)

These are my estimates, based on the retail prices cited above under 2026 memory pricing. They are **not** supplier quotes; the brief already plans to get 2–3 BOM quotes.

| Tier | Spec | What it can run | Est. per-unit hardware cost |
|---|---|---|---|
| Low | RK3588 16 GB board + 2 TB NVMe + PSU + enclosure | ≤4B LLM at ~5 tok/s, CLIP, faces | USD 350–550 |
| **Recommended** | Ryzen AI 300/400 (or Core Ultra), **32 GB**, 2 TB NVMe, custom wood/ceramic enclosure, passive or quiet fan | 26B-A4B or 12B LLM, CLIP, faces, OCR, Whisper | **USD 700–1,100** |
| Budget-x86 | As above with 16 GB | E4B/12B LLM, CLIP, faces | USD 550–800 |
| Jetson Orin NX 16 GB build | Module alone $999 | – | USD 1,300+ |

**Business implication (estimate):** at roughly NOK 10–11 per USD **(unverified FX)**, the recommended tier is about NOK 7,500–12,000. At 149–199 kr/month, that is about **40–80 months of subscription revenue** spent on hardware alone. Either the Buyer pays for Heima-boksen upfront (as GLOSSARY.md implies), or the price hypothesis needs revisiting.

**Market risk:**
- DRAM and NAND prices are still rising ([TrendForce](https://www.trendforce.com/presscenter/news/20260930-13258.html)).
- Raspberry Pi called 2026 "another challenging year for memory pricing" ([Raspberry Pi, Feb 2026](https://raspberrypi.com/news/more-memory-driven-price-rises)).
- Lock in memory pricing early or design for 16 GB.

---

## 9. Top quality risks to test (nynorsk first)

1. **Nynorsk generation quality.** This is go/no-go per the brief. Every model tested by Språkrådet made 2.3 or more errors per 100 words in nynorsk. Small models degrade more (ScaLA-nn), and instruct models copy or switch language when asked for nynorsk (NorEval). *Test:*
   - Build ~200 prompts (50% nynorsk) drawn from Heima tasks: explaining a NAV letter, captioning a memory, writing a reminder.
   - Have a philologist count errors per 100 words using Språkrådet's categories ([slides](https://www.mn.uio.no/ifi/english/research/groups/ltg/251211/07-kristine.pdf)).
   - Add an automatic "bokmål word in nynorsk text" detector.
   - Compare gemma-4-26B-A4B, gemma-4-12B, NorMistral-11B-thinking, Borealis-12b, and gemma-4 + NorMistral-translate post-editing.
   - Also rerun the NorEval nynorsk splits through lm-evaluation-harness ([arXiv 2504.07749](https://arxiv.org/abs/2504.07749)).
   - Go-criterion suggestion: at or below the frontier cloud level in Språkrådet's test (≤2.6 errors per 100 words in nynorsk).
2. **Answering in the user's own written standard.** If a user writes nynorsk or dialect, the assistant must not "correct" them into bokmål. Test mixed and dialectal input, e.g. *"kor e bilda frå hytta?"*.
3. **Hallucinated facts in official letters.** Wrong deadlines, amounts or rights in NAV and Skatteetaten letters are high-stakes, and model cards explicitly warn against such use without safeguards ([NB-Llama card](https://huggingface.co/NbAiLab/nb-llama-3.1-8B-Instruct), [Borealis card](https://huggingface.co/NbAiLab/borealis-4b)). *Test:* field-level extraction accuracy (date, amount, sender, deadline) on 30–50 real letters, with answers that must quote the source text.
4. **OCR on phone photos of letters.** Test æ/ø/å, forms, tables, skewed and low-light shots. No public Norwegian OCR benchmark exists.
5. **Photo search with Norwegian and nynorsk queries.** Build 100 family-style queries (bokmål, nynorsk, dialect) over a pilot library and measure top-10 hit rate. Check that "sommaren 2019" and "bestemor" resolve through the date and person filters, not CLIP alone. Quantify the licence cost: SigLIP2 or XLM-R against NLLB (81 vs 75% on XM3600 NO).
6. **Face clustering.** Measure the accuracy gap between licence-safe models and buffalo_l on children, ageing faces (bestemor 1985 vs 2019) and group shots. Commercial use of buffalo_l requires an InsightFace licence.
7. **Throughput and thermals under real load.** The initial import of 20–50k photos (CLIP + faces) runs alongside chat. Measure:
   - time to index;
   - chat latency during indexing;
   - sustained throttling and surface temperature in the fanless unit inside a wooden enclosure;
   - dBA at 1 m.
8. **Licensing stack.** Get legal review of:
   - the Borealis NB-licence (no use of NB's name in marketing, press-access restriction);
   - the Gemma Terms (if Borealis or Gemma 3 is used);
   - the InsightFace models;
   - Immich AGPL (already flagged in the brief);
   - Apertium GPL;
   - FastFlowLM attribution.

---

## 10. Unverified items and open questions

- EuroEval scores for NorMistral-11B-thinking may understate it because of the thinking-format interaction (not confirmed). Its human-judged nynorsk result is from an April/May 2025 test that may have used an earlier NorMistral checkpoint.
- No primary 8B tokens/s figure was found for Intel Panther Lake or for Jetson Orin NX in Super mode.
- Gemma 4 26B-A4B decode speed on the 890M is extrapolated, not measured.
- Norwegian coverage of PaddleOCR-VL and MEXMA-SigLIP2 is not confirmed.
- No dialect-level WER exists for NB-Whisper.
- The scope of Immich's 2023 InsightFace permission is unknown.
- Whether GDPR's household exemption covers biometric face clustering on an ISP-supplied box is a legal question.
- The FX rate and per-unit BOM are estimates pending supplier quotes.
- Språkrådet's full 2025 report PDF ([link](https://sprakradet.no/wp-content/uploads/rapport_fra_sluttkorrektur_29.9.2025.pdf)) returned HTTP 403. The figures above come from Språkrådet's own seminar slides.
