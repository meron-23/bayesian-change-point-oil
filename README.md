# Bayesian Change Point Detection on Brent Oil Prices

## Project Overview
This project applies **Bayesian Change Point Detection** to **Brent crude oil prices** to identify structural breaks in the time series and relate them to significant geopolitical and economic events. The ultimate goal is to deliver **clear, data-driven insights** supported by a simple, interactive dashboard.

---

## Objectives

### Global Objective
Analyze Brent crude oil price fluctuations to detect significant shifts and understand their potential relationship with historical events.

### Sub-Objectives
1. **Define a clear data analysis workflow** for reproducible and efficient research.
2. **Understand and apply the Bayesian Change Point model** using `PyMC3` to identify structural breaks.
3. **Collect and integrate event data** (geopolitical, OPEC decisions, economic shocks) relevant to oil price fluctuations.
4. **Extract statistically valid insights** aligned with the business objective.
5. **Deliver findings** via:
   - A clear, well-documented report.
   - An intuitive, interactive dashboard.

---

## Tools & Libraries
- **Python**: Main programming language
- **PyMC3**: Bayesian modeling and inference
- **Pandas / NumPy**: Data manipulation
- **Matplotlib / Seaborn / ArviZ**: Data visualization
- **Streamlit or Dash**: Interactive dashboard
- **Jupyter Notebook**: Exploratory analysis
- **Git**: Version control

---

## Project Structure
```
bayesian-change-point-oil/
├── data/ # Raw and processed datasets
├── notebooks/ # Jupyter notebooks for exploration
├── scripts/ # Python scripts for modeling
├── dashboard/ # Streamlit / Dash app files
├── reports/ # Final report and insights
├── README.md # Project documentation
├── .gitignore # Ignored files
└── requirements.txt # Python dependencies
```

---

## Data Analysis Workflow

1. **Data Collection**
   - Obtain historical Brent crude oil prices.
   - Research and compile key geopolitical/economic event dates.

2. **Exploratory Data Analysis (EDA)**
   - Examine trends, volatility, and stationarity.
   - Identify possible structural breaks visually.

3. **Bayesian Change Point Modeling**
   - Apply `PyMC3` Bayesian change point detection.
   - Estimate posterior distributions for change point locations and parameters.

4. **Event Alignment**
   - Compare detected change points with known events.
   - Discuss statistical correlation vs. causation.

5. **Insights & Reporting**
   - Summarize findings in a report.
   - Highlight implications for stakeholders.

6. **Dashboard Development**
   - Build an interactive dashboard for visualizing change points and events.
   - Enable simple exploration of results.

---

## Assumptions & Limitations
- **Correlation ≠ Causation**: Detected change points may align with known events, but statistical correlation does not prove causality.
- Price movements are influenced by multiple factors, not all of which are observable.
- Event dates may be approximate.

---

## Communication Plan
- **Technical Stakeholders**: Jupyter notebooks, technical report.
- **Business Stakeholders**: Dashboard, executive summary report.
- **General Audience**: Simplified dashboard view with annotated key events.

---

## Deliverables
- **Well-documented Bayesian analysis**
- **Interactive dashboard** (Streamlit or Dash)
- **Clear, concise final report** with business insights
