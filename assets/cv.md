# CV -- Tien Dung Vu

**Location:** Epping, NSW, Australia
**Email:** [tiendung7v1@gmail.com](mailto:tiendung7v1@gmail.com)
**GitHub:** github.com/BillVu05
**LinkedIn:** linkedin.com/in/dũng-vũ-tiến-b00a02317
**Phone:** (+61) 466-599-354
**Work Rights:** Student Visa (subclass 500) — unrestricted work hours from July 2026 (end of study obligations). Transitioning to Temporary Graduate Visa (subclass 485) from September 2026. No employer sponsorship required.

## Professional Summary

Results-driven Junior AI Engineer with hands-on expertise in machine learning, natural language processing, computer vision, and data analysis. Experienced in building and deploying AI-powered solutions, including misinformation detection systems, LLM-based research agents, and computer vision applications. Strong foundation in Python, SQL, and AI system design, with proven leadership experience delivering collaborative projects in fast-paced environments.

## Work Experience

### Affinity Marketing Australia -- Sydney, Australia

**AI-Driven Marketing Intern**
May 2026 – Present

* Delivered a full SEO baseline audit across the top 10 landing pages using Google Search Console, producing a keyword ranking report, GA4 baseline traffic report, and monthly rank tracking cadence
* Managed client CRM workflows in HubSpot and Salesforce, maintaining contact records, tracking campaign engagement, and producing pipeline reports for account reviews
* Produced process flow documentation and business requirements documents (BRDs) for automation initiatives, translating stakeholder needs into structured implementation specs for developer handover
* Built 4 end-to-end content automation pipelines using Claude Code and n8n: SEO blog expander, video-to-content-pack, blog-to-social repurposing, and ad copy refresh — eliminating manual production steps across recurring campaign cycles
* Developed a Google Ads copy generator producing 15+ Claude-generated variants and set up a caption-drafting automation, reducing copy turnaround for paid and organic channels
* Engineered an email subject-line A/B testing pipeline and a weekly analytics summary emailer, automating recurring reporting and campaign testing workflows
* Built a Looker Studio cross-channel dashboard consolidating Google Analytics 4 and Search Console data into a single performance view with automated weekly stakeholder summaries
* Authored an internal linking strategy document and an AI automation playbook documenting all pipelines, tools (Claude Code, n8n, GA4, Looker Studio, GSC), and workflows for team handover

### CMC Corporation Vietnam

**AI Engineer Intern**
October 2024 – April 2025

* Built computer vision systems for image classification using Convolutional Neural Networks (CNNs)
* Applied data augmentation and normalisation techniques to improve model generalisation
* Developed end-to-end deep learning pipelines covering data preparation, training, evaluation, and hyperparameter tuning
* Evaluated model performance and iteratively improved architectures to optimise accuracy
* Implemented solutions using Python and Visual Studio Code

### FPT Vietnam

**AI Engineer Intern**
September 2023 – February 2024

* Applied supervised learning algorithms including Linear Regression, Logistic Regression, and Decision Trees on structured datasets
* Implemented clustering methods such as K-Means for unsupervised pattern discovery
* Developed NLP classification models using word embeddings and text-processing techniques
* Conducted data analysis, visualisation, and experimentation using Google Colab
* Evaluated and interpreted machine learning results to support decision-making

### OACIS -- Sydney Airport

Passenger Service Agent
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
* Engineered an ETL pipeline ingesting real BITRE international aviation statistics, World Bank GDP/population/tourism indicators, OurAirports coordinates, and real competitor schedules/fares/ratings (Singapore Airlines, Qantas, ANA, Air NZ, Jetstar, Virgin Australia) — recalibrated the market-share logit model and fare formulas against real benchmarks, e.g. matching Singapore Airlines' actual ~60% Sydney-Singapore share within 1pp
* Trained and validated an **XGBoost demand forecasting model** against real-world noise (R²=0.952, MAPE=15.3% on a held-out 2024 test set), adding 5-fold cross-validation and residual-quantile prediction intervals; designed a custom statistical **confidence-scoring system** combining bootstrap-ensemble disagreement (30-model resample), per-route historical forecast reliability, and training-distribution extrapolation distance into one explainable 0–100 score surfaced across the forecasting, simulation, and reporting UI
* Anchored the cost model's non-fuel CASM to Qantas Group's disclosed FY25 unit economics and built a revenue model (cabin fare multipliers, ancillary revenue per pax), chained into a `/route_economics` endpoint returning full monthly P&L
* Built a **what-if simulation engine** and a **Monte Carlo risk simulator** (`/monte_carlo`) sampling real fuel-price and GDP-growth volatility (plus an illustrative competitor-entry shock) to produce profit/passenger/load-factor probability distributions — rather than point estimates — for any route or scenario, with named presets (fuel price shock, tourism boom, competitor entry)
* Implemented a **LangGraph five-agent pipeline** (`/copilot`): deterministic Demand and Finance agents extract figures directly from the simulation engine; Market, Risk, and Strategy agents call Gemini (`gemini-2.5-flash`) to narrate those numbers with real macro/competitor context, producing an executive strategy recommendation
* Built a **conversational AI executive chat agent** (`/chat`) backed by Gemini with 11 function-calling tools — route simulation, demand trend forecasting, macro projection, multi-year P&L analysis, Monte Carlo risk analysis, network portfolio ranking, and full strategic feasibility analysis for any airport worldwide
* Developed **multi-year macro projection models** (GDP via EWMA trend + IMF long-run mean reversion, population via OLS extrapolation, tourism via pre-COVID structural CAGR, fuel price via a discrete Ornstein-Uhlenbeck mean-reversion model) feeding an **open route analyst** that scores strategic feasibility for any of 159 worldwide airports — market sizing, multi-factor risk scoring, composite 0–100 scoring, and side-by-side ranking of up to 8 candidate destinations
* Designed a **PostgreSQL schema** with ETL load scripts and a 3-container Docker Compose deployment (database, FastAPI backend, Next.js frontend)
* Built an **11-page Next.js dashboard** (App Router, TypeScript, Tailwind CSS, Recharts, React-Leaflet) spanning route exploration, market/demand/revenue intelligence, AI agent orchestration, a conversational copilot, risk stress-testing, multi-year forecasting, and a persisted strategic report library — using Google's AI-powered **Stitch** design tool (via its MCP server) to design and sync the entire visual system to React components across every page
* Built a persistent **Strategic Report Library**: a JSON-backed FastAPI CRUD API and card-based React UI that automatically archives completed analyses (5-agent pipeline runs, new-route feasibility studies) for later retrieval, with upsert semantics so an incrementally-enriched analysis updates its existing entry instead of duplicating
* Led a full **data-integrity audit** across the dashboard — traced every displayed metric to its source, removed ~30 fabricated or mislabeled UI elements (invented confidence badges, hardcoded risk indices, a fake report history), and replaced them with real backend-computed data; implemented graceful LLM degradation so simulation/forecasting/financial figures stay real and available even when narrative commentary degrades due to missing API keys

### Research LLM Agent (CLI)

**Python, LangGraph, Google Gemini, SerpAPI, Docker | Sep 2024 – Aug 2025**

* Designed and implemented a 4-node LangGraph pipeline (`GenerateQueries → WebSearch → Reflect → Synthesize`) with a conditional reflection loop that routes back to web search when coverage gaps are detected, enabling multi-round research on a single query
* `GenerateQueries` node prompts Gemini to produce 3–5 targeted search queries from a natural-language question; `WebSearch` executes them in parallel via SerpAPI with URL deduplication across results
* `Reflect` node uses Gemini to evaluate information coverage against tracked slots, outputting a structured `{"need_more": bool, "new_queries": [...], "filled": [...]}` schema to drive conditional graph routing
* `Synthesize` node produces a final `{"answer": "...", "citations": [...]}` JSON response with Markdown-formatted citations mapped to source URLs
* Implemented layered error handling: JSON parse fallbacks, SerpAPI `try/except`, ThreadPool timeout handling, and Reflect-driven regeneration of targeted queries for missing fields
* Wrote a 5-scenario test suite covering happy path, no results, HTTP 429 throttling, timeout, and two-round supplement flow; containerised with Docker for portable deployment

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
* Applied a three-model sentiment framework — VADER (lexicon-based), RoBERTa (twitter-finetuned transformer), and FinBERT (financial-domain transformer) — to compare sentiment distributions across headlines and full article bodies, commissioned for The Sydney Morning Herald
* Implemented a FinBERT sliding window (450-token chunks, 50-token stride) to score full article bodies rather than truncated excerpts, enabling detection of a persistent headline-body sentiment divergence: full articles were consistently more negative than their headlines across all 10 major Guardian sections
* Quantified inter-model agreement across 1,033 articles (three-way headline agreement: 35.7%; RoBERTa-FinBERT body: 57.4%; VADER-FinBERT body: 18.2%) and applied BERTopic to identify dominant risk themes: AI chatbots & mental health (54 articles), AI safety (46), automation & jobs (42), data privacy/scams (41), deepfakes (41, most negative at FinBERT -0.34)
* Identified a structural sentiment shift post-ChatGPT: coverage grew from 27 articles (2022) to 357 (2025); FinBERT headline compound sentiment declined from -0.110 (2017) to -0.330 (2026); delivered 6 evidence-based editorial recommendations to SMH on AI literacy journalism and coverage positioning

### Stock Information & Alert App (SVB)

**Swift, SwiftUI, Swift Charts, SwiftData, Polygon.io API | University of Technology Sydney**

* Collaborated in a team of 4 to build SVB, a SwiftUI iOS stock tracking app integrated with Polygon.io, following MVVM architecture with async/await concurrency throughout
* Owned the stock detail screen end-to-end: designed and implemented a 3-tab SwiftUI layout (Info / News / Alerts) with a custom tab-switching system, favourite toggle, and back navigation
* Built an interactive historical price chart using Swift Charts with 5 selectable time periods (7D / 1M / 6M / 1Y / 5Y), fetching OHLC bar data from Polygon's aggregate endpoint with dynamic date-range calculation per period
* Authored `NewsService` and `StockDetailViewModel` to fetch, decode, and display contextual financial news per ticker from the Polygon news endpoint, with full async error handling and loading-state management
* Integrated SwiftData-backed price alert configuration and real-time favourite state into the detail view, coordinating shared state across multiple ViewModels via `@EnvironmentObject`

## Education

### University of Technology Sydney (UTS)

**Bachelor of Artificial Intelligence** — (Graduating October 2026 - only mention when needed) 

* WAM: 85.0 / 100

## Skills

* **Programming:** Python, SQL, Java, Swift, SwiftUI
* **Machine Learning & AI:** NLP, Computer Vision, CNNs, BERT, TF-IDF, Naive Bayes, Text Classification, Sentiment Analysis, Topic Modelling
* **LLM Systems:** LangGraph, LLM Pipeline Design, Agentic Workflow Design, Prompt Engineering, RAG, Query Generation, Information Retrieval, Result Synthesis
* **Data & Analytics:** Data Analysis, Data Cleaning, Feature Engineering, Exploratory Data Analysis, Statistical Analysis
* **Software Engineering:** API Integration, Backend Development, CLI Applications, Object-Oriented Programming, System Design
* **Tools & Platforms:** Google Colab, Docker, Git, GitHub, REST APIs, JSON, Pytest, HubSpot, Salesforce, Looker Studio, n8n
* **Business Analysis:** Requirements Gathering, Process Flows, BRDs, Stakeholder Documentation, CRM Workflow Management, Microsoft Office
* **Collaboration:** Team Leadership, Agile Development, Project Delivery, Technical Documentation, Cross-functional Communication
