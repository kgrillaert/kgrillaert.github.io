---
layout: page
title: The Silent Emergency - Predicting Preterm Birth
description: Our project harnesses machine learning techniques to predict preterm birth using electronic health records. This data intersects with social determinants of health, reflecting some of the interactions contributing to preterm birth. Recognizing that under-representation in healthcare research perpetuates racial and ethnic health disparities, we take care to use diverse data to ensure equitable model performance across underrepresented populations.
img: assets/img/motherhood.jpg
importance: 2
category: ethics & algorithms
giscus_comments: false
---

>[Erdős Institute](https://www.erdosinstitute.org/) | [Data Science Boot Camp Fall 2023](https://www.erdosinstitute.org/programs/fall-2023/data-science-boot-camp)
>
>- View our [5-minute recorded presentation](https://www.erdosinstitute.org/project-database/fall-2023/data-science-boot-camp/the-silent-emergency---predicting-preterm-birth)
>- Download our [Executive Summary](https://github.com/kgrillaert/preterm_birth/blob/main/06.Docs/Preterm_Birth_Exec%20_Summary.pdf)
>- Visit our [GitHub repo](https://github.com/kgrillaert/preterm_birth)

>Team Members:
>- [Katherine Grillaert](https://www.linkedin.com/in/kgrillaert/)
>- [Divya Joshi](https://www.linkedin.com/in/divya-joshi-phd-candidate/)
>- [Noah Rahman](https://www.linkedin.com/in/noah-rahman-01504257/)
>- [Alex Sutherland](https://www.linkedin.com/in/alexander-sutherland-math/)
>- [Kristina Zvolanek](https://www.linkedin.com/in/kristina-zvolanek/)

### Project Description

#### ***“The world is facing a silent emergency. . . of preterm births.” - UNICEF[<sup>1</sup>](https://www.who.int/publications/i/item/9789240073890)***

Preterm birth is a primary cause of infant mortality and morbidity in the United States, affecting approximately 1 in 10 births.[<sup>2</sup>](https://pubmed.ncbi.nlm.nih.gov/36170979/) This rate is notably higher among Black women (14.6%), compared to White (9.4%) and Hispanic women (10.1%).[<sup>3</sup>](https://www.cdc.gov/maternal-infant-health/preterm-birth/) These rates have recently declined for White women but remained unchanged for other groups.[<sup>4</sup>](https://pubmed.ncbi.nlm.nih.gov/35072604/) Despite its prevalence, predicting preterm birth remains challenging due to its multifaceted etiology rooted in environmental, biological, genetic, and behavioral interactions.[<sup>5</sup>](https://pubmed.ncbi.nlm.nih.gov/28941962) Our project harnesses machine learning techniques to predict preterm birth using electronic health records. This data intersects with social determinants of health, reflecting some of the interactions contributing to preterm birth.[<sup>6</sup>](https://pubmed.ncbi.nlm.nih.gov/19000029/) Recognizing that under-representation in healthcare research perpetuates racial and ethnic health disparities, we take care to use diverse data to ensure equitable model performance across underrepresented populations.[<sup>7</sup>](https://ses.library.usyd.edu.au/handle/2123/30841)

### Project Stakeholders
Pregnant individuals, prospective parents, medical professionals involved with maternal care and births, hospital systems, insurance companies

### Approach
We constructed two models to predict preterm birth, one with demographic features and one with health and lifestyle features. Our data source was the National Institute of Health’s [_All of Us_ Research Program](https://allofus.nih.gov/) controlled tier of de-identified medical data. The Demographics model was trained on a dataset of 13690 births between the years 2009 and 2022. Most demographic information for each individual was available only as summary statistics based on their zip code. Race and ethnicity were available on the individual level. The Lifestyle model was trained on a dataset of 8771 births between the years 2011 and 2022. Features included drinking, smoking, drug use, body mass index, diabetes, and mental health.

### Model Details
***Baseline model:*** Our baseline model was a weighted coin flip that reflected the ratio of preterm births in our data.

***Demographics model:*** The Demographics model was trained on a dataset of 13690 births between the years 2009 and 2022. Most demographic information for each individual was available only as summary statistics based on their zip code. Race and ethnicity were available on the individual level. We used a Support Vector Classifier with class weights to prioritize prediction of preterm birth. GridSearch CV was used to tune hyperparameters. 

***Lifestyle model:*** The Lifestyle model was trained on a dataset of 8771 births between the years 2011 and 2022. Features explored included drinking, smoking, drug use, body mass index, diabetes, and mental health. We used a logistic regression with class weights to prioritize prediction of preterm birth.

For both models, we used the package [AI Fairness 360](https://aif360.res.ibm.com/) to ensure that our model predictions performed equally well
across protected classes (race and ethnicity).

### Data Access
The data used to train these models was accessed from the [_All of Us_ Research Hub](https://www.researchallofus.org/). You must [register for the Researcher Workbench](https://www.researchallofus.org/register/) to access the data. We specifically used individual-level data from the [Controlled Access Tier](https://www.researchallofus.org/data-tools/data-access/), which requires the completion of additional training. To facilitate testing without access to this protected health data, we have also provided a synthetic data frame.
