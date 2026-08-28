# CV -- Tien Dung Vu

**Location:** Epping, NSW, Australia
**Email:** [tiendung7v1@gmail.com](mailto:tiendung7v1@gmail.com)
**GitHub:** github.com/BillVu05
**LinkedIn:** www.linkedin.com/in/tiendungvu
**Phone:** (+61) 466-599-354
**Work Rights:** Temporary Graduate Visa (subclass 485), granted July 2026, valid to July 2028. Unrestricted work hours. No employer sponsorship required.

## Professional Summary

AI Engineer who builds and ships production AI systems: LLM agent pipelines, RAG assistants, and ML models trained, evaluated, and **deployed to AWS** behind FastAPI endpoints. Treats LLM systems as software that has to be measured and attacked — **offline eval harnesses, golden sets, groundedness and citation-validity metrics, abstention testing, prompt-injection hardening, and graceful degradation** — not just prompted. Hands-on with Python, SQL, LangGraph, Docker, CI/CD and AWS deployment, plus the analytics side of the job: ETL/ELT pipelines into PostgreSQL, A/B testing and hypothesis testing, and Power BI reporting for non-technical stakeholders. Track record of taking systems from stakeholder requirements through to a working, deployed, measured product.

## Work Experience

### AI-Driven Marketing Intern

**Affinity Marketing Australia - Sydney, Australia**
May 2026 – Present

* Built a HubSpot data-entry automation system, writing the integration code with Claude Code to automate the input and formatting of customer, contract, and personal information into the CRM database, processing 500+ contact records and cutting data-formatting error rates by 50%
* Built 4 end-to-end content automation pipelines using Claude Code and n8n (SEO blog expander, video-to-content-pack, blog-to-social repurposing, ad copy refresh), eliminating manual production steps across recurring campaign cycles
* Engineered an email subject-line **A/B testing** pipeline and a weekly analytics summary emailer, automating recurring reporting and campaign testing workflows
* Developed a Google Ads copy generator producing 15+ Claude-generated variants and a caption-drafting automation, reducing copy turnaround for paid and organic channels
* Analysed campaign and store performance data across **Google Analytics (GA4)**, **Google Search Console**, **Google Merchant Center**, and **Shopify**, building **Looker Studio (Data Studio)** reports for the marketing team and feeding the findings back into **SEO** and paid campaign optimisation
* Authored an AI automation playbook documenting all pipelines, tools (Claude Code, n8n, GA4, Looker Studio, GSC, Merchant Center, Shopify), and workflows for team handover

### AI Engineer Intern

**CMC Corporation - Hanoi, Vietnam**
October 2024 – April 2025

* Designed and built an end-to-end AI-powered employee onboarding system, from ETL/ELT pipelines through model serving to production deployment
* Partnered with HR and operations stakeholders to scope the system as part of a **5-person team**, running requirements sessions and translating business needs into technical specifications and delivery milestones
* Designed and built ETL/ELT pipelines in Python and SQL loading **120,000+ HR, onboarding, and operational records** into PostgreSQL, on **daily incremental scheduled loads** with schema validation and deduplication
* Built classical ML models with scikit-learn and XGBoost for propensity and attrition risk scoring, plus K-Means clustering to segment employee cohorts by onboarding pathway, and time-series models forecasting onboarding volume and resourcing demand
* Ran hypothesis testing and A/B tests on onboarding interventions, reporting lift with confidence intervals so decisions rested on measured effect rather than anecdote
* Engineered the AI layer of the onboarding system: a **retrieval-augmented generation (RAG)** assistant over **700 internal policy documents (~3,000 pages)**, embedding the corpus and serving semantic retrieval from a **FAISS vector index** into LLM APIs with prompt engineering, letting **50 HR staff and new starters** query procedures in natural language, plus a recommendation component surfacing relevant training modules per role and cohort
* Built NLP components including text classification and **PyTorch-based named entity recognition** across Vietnamese and English HR documents, and an OCR / document AI step extracting structured fields from **1,250 scanned onboarding documents**
* **Deployed the trained models to production on AWS**, serving them behind **10 FastAPI endpoints** and containerising with Docker, so the onboarding system consumed predictions through a stable cloud API rather than ad hoc scripts
* Built Power BI dashboards and recurring reports giving HR and operations leads a single view of onboarding throughput, drop-off points, and data quality status
* Delivered in two-week Jira sprints with Git-based pull request review, documenting pipeline design and model behaviour for team handover

### AI Engineer Intern

**FPT - Hanoi, Vietnam**
September 2023 – February 2024

* Designed and implemented a **GitHub Actions CI/CD pipeline** from scratch, triggered on pull requests and merges to main, running the unit and integration test suites and linting the codebase on every change
* Extended the pipeline through to delivery: **building and tagging Docker images**, pushing them to a **container registry**, and deploying the application to its target environment
* Configured **environment-specific secrets and deployment checks**, so each environment released under its own credentials and gates rather than by hand
* Owned the pipeline through the data preprocessing work, refining and extending the automated checks as the preprocessing steps evolved
* Built and trained supervised learning models (Linear Regression, Logistic Regression, Decision Trees) on structured datasets, from feature preparation through evaluation
* Implemented K-Means clustering pipelines for unsupervised pattern discovery
* Developed NLP text classification models using word embeddings and custom text-processing pipelines
* Prototyped and benchmarked model architectures in Google Colab, iterating on performance against evaluation metrics

### Passenger Service Agent

**OACIS - Sydney, Australia**
October 2025 – Present

* Assisted passengers at airport information desks by providing directions, travel information, flight updates, terminal guidance, and general customer support.
* Managed passenger flow throughout terminals, helping reduce congestion and ensuring efficient movement through check-in, security screening, boarding gates, and arrivals areas.
* Directed passengers to appropriate airport facilities, including airline counters, baggage services, transport connections, lounges, and customer service points.
* Responded to passenger enquiries and resolved issues related to flight schedules, terminal navigation, airport services, and travel procedures.
* Collaborated with airline staff, security personnel, and airport operations teams to maintain smooth daily operations and deliver a positive passenger experience.
* Assisted passengers during peak travel periods, delays, disruptions, and operational changes by providing timely information and crowd management support.
* Supported elderly passengers, families, international travellers, and passengers requiring additional assistance to ensure accessible and efficient airport navigation.
* Monitored terminal activity and identified potential bottlenecks, contributing to effective queue management and operational efficiency.
* Maintained high standards of customer service while working in a fast-paced, safety-focused airport environment.
* Developed strong communication, problem-solving, conflict resolution, and stakeholder management skills through direct interaction with diverse passenger groups and airport personnel.


## Projects

### Pacific Wings Airline Strategy Simulator

June 2026 – Present

**Python, FastAPI, Next.js, TypeScript, XGBoost, scikit-learn, LangGraph, Gemini AI, PostgreSQL, Docker**

* Built a full-stack airline analytics and strategy platform for a fictional Sydney-based carrier, grounded in real-world aviation, macroeconomic, and cost data rather than purely synthetic assumptions
* Engineered an ETL pipeline ingesting real BITRE international aviation statistics, World Bank GDP/population/tourism indicators, OurAirports coordinates, and real competitor schedules/fares/ratings (Singapore Airlines, Qantas, ANA, Air NZ, Jetstar, Virgin Australia); recalibrated the market-share logit model and fare formulas against real benchmarks, e.g. matching Singapore Airlines' actual ~60% Sydney-Singapore share within 1pp
* Trained and validated an **XGBoost demand forecasting model** against real-world noise (R²=0.952, MAPE=15.3% on a held-out 2024 test set), adding 5-fold cross-validation and residual-quantile prediction intervals; designed a custom statistical **confidence-scoring system** combining bootstrap-ensemble disagreement (30-model resample), per-route historical forecast reliability, and training-distribution extrapolation distance into one explainable 0–100 score surfaced across the forecasting, simulation, and reporting UI
* Anchored the cost model's non-fuel CASM to Qantas Group's disclosed FY25 unit economics and built a revenue model (cabin fare multipliers, ancillary revenue per pax), chained into a `/route_economics` endpoint returning full monthly P&L
* Built a **what-if simulation engine** and a **Monte Carlo risk simulator** (`/monte_carlo`) sampling real fuel-price and GDP-growth volatility (plus an illustrative competitor-entry shock) to produce profit/passenger/load-factor probability distributions (rather than point estimates) for any route or scenario, with named presets (fuel price shock, tourism boom, competitor entry)
* Implemented a **LangGraph five-agent pipeline** (`/copilot`): deterministic Demand and Finance agents extract figures directly from the simulation engine; Market, Risk, and Strategy agents call Gemini (`gemini-2.5-flash`) to narrate those numbers with real macro/competitor context, producing an executive strategy recommendation
* Built a **conversational AI executive chat agent** (`/chat`) backed by Gemini with 11 function-calling tools: route simulation, demand trend forecasting, macro projection, multi-year P&L analysis, Monte Carlo risk analysis, network portfolio ranking, and full strategic feasibility analysis for any airport worldwide
* Developed **multi-year macro projection models** (GDP via EWMA trend + IMF long-run mean reversion, population via OLS extrapolation, tourism via pre-COVID structural CAGR, fuel price via a discrete Ornstein-Uhlenbeck mean-reversion model) feeding an **open route analyst** that scores strategic feasibility for any of 159 worldwide airports: market sizing, multi-factor risk scoring, composite 0–100 scoring, and side-by-side ranking of up to 8 candidate destinations
* Designed a **PostgreSQL schema** with ETL load scripts and a 3-container Docker Compose deployment (database, FastAPI backend, Next.js frontend)
* Built an **11-page Next.js dashboard** (App Router, TypeScript, Tailwind CSS, Recharts, React-Leaflet) spanning route exploration, market/demand/revenue intelligence, AI agent orchestration, a conversational copilot, risk stress-testing, multi-year forecasting, and a persisted strategic report library, using Google's AI-powered **Stitch** design tool (via its MCP server) to design and sync the entire visual system to React components across every page
* Built a persistent **Strategic Report Library**: a JSON-backed FastAPI CRUD API and card-based React UI that automatically archives completed analyses (5-agent pipeline runs, new-route feasibility studies) for later retrieval, with upsert semantics so an incrementally-enriched analysis updates its existing entry instead of duplicating
* Led a full **data-integrity audit** across the dashboard: traced every displayed metric to its source, removed ~30 fabricated or mislabeled UI elements (invented confidence badges, hardcoded risk indices, a fake report history), and replaced them with real backend-computed data; implemented graceful LLM degradation so simulation/forecasting/financial figures stay real and available even when narrative commentary degrades due to missing API keys

### Research LLM Agent (CLI)

**Python, LangGraph, Google Gemini, SerpAPI, Docker, Pytest, Ruff, GitHub Actions, setuptools | Jul 2025**
**Repo:** github.com/BillVu05/llm-research-agent

* Built a CLI research agent that turns a natural-language question into a cited answer as strict JSON, implemented as a **LangGraph `StateGraph`** over four nodes (`generate_queries → web_search → reflect → synthesize`) with a typed state schema
* Implemented a **conditional edge** out of `reflect`: when the retrieved documents fail to cover a required fact, the graph routes back to `web_search` with model-written follow-up queries, bounded by a round budget so a persistent gap terminates instead of looping
* Made coverage checking general by having the query-planning call **derive the required "slots" per question** rather than reading a hardcoded topic table — same one LLM call, no extra cost
* Ran a **self-audit of the finished pipeline and found the reflection loop was a no-op in production**: only the first *N* documents are ever passed to the model, round one already returns more than that, so every follow-up round spent a search and an LLM call on documents that were appended out of view. Fixed the ordering so a new round takes the front of the context window while round-one evidence keeps the rest, and pinned it with a regression test that fails if follow-up results stop reaching the prompt
* Eliminated a class of citation hallucination by **reconstructing citations from the retrieved document set** using the source indices the model returns, so a cited URL is provably one the agent actually fetched
* Grounded synthesis in retrieved **search snippets** rather than titles alone, so answers rest on retrieved text instead of the model's own recall of a headline
* Treated retrieved web text as **untrusted input**: search snippets are attacker-controlled content going into a prompt, so every document is fenced in a delimiter, each field is length-capped, and both retrieval-bearing prompts open by instructing the model that the fenced content is data and never commands
* Hardened the agent against real production failure modes — **explicit timeouts on both APIs** (SerpAPI's own default is 60,000 *seconds*, effectively none), **exponential-backoff retry** on 429s and 5xx so one throttled call no longer silently degrades an answer, deterministic safety blocks deliberately *not* retried, and a rolling model alias after a pinned model was retired and began returning 404 on every live call
* Fixed the **machine-readable output contract**: diagnostics were being written to stdout ahead of the JSON, so piping a failing run into any parser crashed. All logging now goes to stderr, the `degraded` flag is surfaced in the payload rather than computed and discarded, and a fallback answer exits non-zero so a shell caller can branch on it
* Built an **evaluation harness over a 25-question golden set** tiered *parametric* / *retrieval* / *multi-fact* / *abstention*, scoring citation validity, keyword recall, slot-fill rate, reflection-loop firing rate, answer-length compliance, **LLM calls per question as a cost metric**, and p95 latency — deterministic by default, with optional **LLM-as-judge groundedness**
* Designed the golden set to **grade refusal as well as recall**: abstention cases (false-premise and unknowable questions) fail on `must_not_include`, so a fluent, well-cited, schema-valid answer to "who won the 2027 World Cup" scores FAIL — the failure mode a research agent is most embarrassed by. Also removed keyword checks too weak to prove anything (a required `"2"` matches `"2022"` in almost any answer) and enforced a minimum keyword length in a test
* Wrote a **52-test Pytest suite** that asserts **which graph nodes executed**, not just the final output — the regression that motivated it was a reflection node that never ran while every test still passed green; every bug found in the audit above has a named test pinning it, all Gemini and SerpAPI calls are mocked, so the suite needs no API keys and completes in under a second
* Set up **GitHub Actions CI** running Ruff and the test suite across Python 3.11/3.12 plus a Docker image build on every push and pull request; made the project `pip`-installable with a console entry point, split test tooling out of the runtime requirements so it no longer ships in the image, added upper bounds to unpinned dependencies, and set the container to run as a non-root user

### Stock Information & Alert App (SVB)

**Swift, SwiftUI, Swift Charts, SwiftData, Polygon.io API | University of Technology Sydney**

* Collaborated in a team of 4 to build SVB, a SwiftUI iOS stock tracking app integrated with Polygon.io, following MVVM architecture with async/await concurrency throughout
* Owned the stock detail screen end-to-end: designed and implemented a 3-tab SwiftUI layout (Info / News / Alerts) with a custom tab-switching system, favourite toggle, and back navigation
* Built an interactive historical price chart using Swift Charts with 5 selectable time periods (7D / 1M / 6M / 1Y / 5Y), fetching OHLC bar data from Polygon's aggregate endpoint with dynamic date-range calculation per period
* Authored `NewsService` and `StockDetailViewModel` to fetch, decode, and display contextual financial news per ticker from the Polygon news endpoint, with full async error handling and loading-state management
* Integrated SwiftData-backed price alert configuration and real-time favourite state into the detail view, coordinating shared state across multiple ViewModels via `@EnvironmentObject`

### Misinformation Detection System

**Python, scikit-learn, TF-IDF, Naive Bayes, NLP | University of Technology Sydney | Sep – Nov 2025**

* Led a team of 5 to build a binary fake-news classifier trained on a labelled dataset of real and fake news articles (Fake.csv / True.csv)
* Implemented a full NLP preprocessing pipeline: lowercasing, punctuation removal, and parallelised text cleaning across all CPU cores using `joblib.Parallel(n_jobs=-1)`
* Vectorised text with TF-IDF (40,000 features, `max_df=0.7`, English stop words removed) and trained a Multinomial Naive Bayes classifier on a 70/30 train-test split
* Evaluated model performance with accuracy score, precision/recall/F1 classification report, and a seaborn confusion matrix heatmap; persisted trained model and vectorizer as `.pkl` files for reuse without retraining
* Shipped an interactive CLI classification loop allowing real-time prediction of unseen news articles

### IMDB Movie Review Sentiment Classification

**Python, scikit-learn, NLTK, TF-IDF, Logistic Regression | University of Technology Sydney | Feb – Apr 2025**

* Built a binary sentiment classifier (positive/negative) on the Keras IMDB dataset (50k reviews), applying stratified 70/20/10 train/val/test splits to maintain class balance across folds
* Implemented a full NLP preprocessing pipeline: lowercasing, punctuation removal, English stop word filtering, and NLTK lemmatization to reduce vocabulary noise before vectorization
* Vectorised text with TF-IDF (unigram + bigram, `max_features=10,000`) and trained a Logistic Regression classifier with L2 regularization using the LBFGS solver inside a scikit-learn `Pipeline`
* Tuned hyperparameters (C, max_features, ngram_range) via `GridSearchCV` with 5-fold stratified cross-validation, achieving best F1=0.8799 ± 0.0073 on the training splits
* Evaluated on held-out test set: AUC-ROC=0.9531, AUC-PR=0.9567, 62 total misclassifications out of 562 test samples; conducted feature importance analysis (top discriminative terms) and error analysis of sarcasm and contextually mixed misclassifications

### Australian Media Sentiment and Framing of AI

**Python, VADER, RoBERTa, FinBERT, BERTopic, Guardian API | University of Technology Sydney | Jan – Jun 2026**

* Built a Python ETL pipeline (Google Colab) to collect 2,622 Guardian Australia articles via the Guardian Open Platform API with keyword search, rate-limited pagination (1.1s delay), and multi-criteria AI relevance filtering (headline, tags, URL, or ≥3 body mentions), reducing the corpus to 1,033 articles spanning 2017–2026
* Applied a three-model sentiment framework, VADER (lexicon-based), RoBERTa (twitter-finetuned transformer), and FinBERT (financial-domain transformer), to compare sentiment distributions across headlines and full article bodies, commissioned for The Sydney Morning Herald
* Implemented a FinBERT sliding window (450-token chunks, 50-token stride) to score full article bodies rather than truncated excerpts, enabling detection of a persistent headline-body sentiment divergence: full articles were consistently more negative than their headlines across all 10 major Guardian sections
* Quantified inter-model agreement across 1,033 articles (three-way headline agreement: 35.7%; RoBERTa-FinBERT body: 57.4%; VADER-FinBERT body: 18.2%) and applied BERTopic to identify dominant risk themes: AI chatbots & mental health (54 articles), AI safety (46), automation & jobs (42), data privacy/scams (41), deepfakes (41, most negative at FinBERT -0.34)
* Identified a structural sentiment shift post-ChatGPT: coverage grew from 27 articles (2022) to 357 (2025); FinBERT headline compound sentiment declined from -0.110 (2017) to -0.330 (2026); delivered 6 evidence-based editorial recommendations to SMH on AI literacy journalism and coverage positioning

## Education

### University of Technology Sydney (UTS)

**Bachelor of Artificial Intelligence**

* Graded: High Distinction

## Skills

* **Programming:** Python, SQL, Java, Swift, SwiftUI
* **LLM Systems:** LangGraph (LangChain ecosystem), LLM Pipeline Design, Agentic Workflow Design, Conditional Graph Routing, Prompt Engineering, Prompt-Injection Mitigation, Untrusted-Input Handling, Structured Output, RAG (Retrieval-Augmented Generation), Embeddings, Vector Search, FAISS, Semantic Retrieval, Query Generation, Information Retrieval, Result Synthesis, Model Context Protocol (MCP)
* **LLM Evaluation:** Golden-Set Construction, Offline Eval Harnesses, LLM-as-a-Judge, Groundedness & Citation-Validity Metrics, Hallucination Mitigation, Abstention & False-Premise Testing, Prompt Regression Testing, Latency & Cost Budgeting, Graceful Degradation
* **Software Engineering:** API Integration, Backend Development, FastAPI, CLI Applications, Object-Oriented Programming, System Design, Test-Driven Development, Regression Testing, Linting & Static Analysis (Ruff), Dependency Management, Python Packaging (setuptools, entry points), Reproducible Builds, Secrets Management, Retry & Backoff, Timeout Handling
* **Machine Learning & AI:** NLP, Named Entity Recognition, OCR / Document AI, Computer Vision, PyTorch, XGBoost, scikit-learn, Regression, Decision Trees, Clustering (K-Means), Time-Series Forecasting, Recommendation Systems, BERT, TF-IDF, Naive Bayes, Text Classification, Sentiment Analysis, Topic Modelling
* **Statistics & Experimentation:** Hypothesis Testing, A/B Testing, Confidence Intervals, Cross-Validation, Model Evaluation Metrics (AUC-ROC, Precision/Recall/F1)
* **Cloud & Deployment:** AWS, Docker, FastAPI, Model Serving, Containerised Deployment, CI/CD, GitHub Actions, Build & Release Automation, Container Registry, Continuous Delivery
* **BI & Reporting:** Power BI, Looker Studio, GA4, Google Search Console, Dashboard Design
* **Tools & Platforms:** PostgreSQL, Git, GitHub, GitHub Actions, Jira, Agile/Scrum, Google Colab, REST APIs, JSON, Pytest, Ruff, Docker Compose, HubSpot, Salesforce, n8n
* **Data Engineering:** ETL/ELT Pipelines, Data Quality Assurance, Feature Engineering
* **Collaboration:** Team Leadership, Agile Development, Project Delivery, Technical Documentation, Cross-functional Communication
