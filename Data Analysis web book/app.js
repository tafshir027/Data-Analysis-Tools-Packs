document.addEventListener('DOMContentLoaded', () => {
  const sectionList = document.getElementById('sectionList');
  const questionList = document.getElementById('questionList');
  const sectionTitle = document.getElementById('sectionTitle');

  // Data directly embedded in app.js
  const data = [
    {
      title: "ডেটা এনালাইসিস বেসিক",
      questions: [
        {
          question: "ডেটা এনালাইসিস কী?",
          answer: "ডেটা এনালাইসিস হল একটি প্রক্রিয়া যেখানে কাঁচা ডেটা থেকে তথ্য বের করা হয় এবং সেই তথ্যকে বিশ্লেষণ করে গুরুত্বপূর্ণ সিদ্ধান্ত নেওয়ার জন্য ব্যবহার করা হয়।",
          explanation: "ধরুন, আপনি একটি দোকানের মালিক। আপনি যদি বুঝতে চান কোন পণ্য বেশি বিক্রি হচ্ছে, তাহলে আপনি সেই ডেটা বিশ্লেষণ করে দেখতে পারেন।"
        },
        {
          question: "ডেটা এনালাইসিসের উদ্দেশ্য কী?",
          answer: "ডেটা এনালাইসিসের মূল উদ্দেশ্য হল ডেটা থেকে অর্থপূর্ণ তথ্য বের করা এবং সেই তথ্য ব্যবহার করে ভালো সিদ্ধান্ত নেওয়া।",
          explanation: "ধরুন, একটি স্কুল তাদের ছাত্রদের পরীক্ষার ফলাফল বিশ্লেষণ করে দেখল যে কোন বিষয়ে ছাত্ররা দুর্বল, এবং সেই বিষয়ে বেশি মনোযোগ দিতে পারে।."
        },
        {
          question: "ডেটা এনালাইসিসের প্রথম ধাপ কী?",
          answer: "ডেটা এনালাইসিসের প্রথম ধাপ হল ডেটা সংগ্রহ করা।",
          explanation: "যেমন, একটি কোম্পানি যদি জানতে চায় কোন পণ্য বেশি বিক্রি হচ্ছে, তাহলে তারা প্রথমে বিক্রির ডেটা সংগ্রহ করবে।"
        },
        {
          question: "ডেটা এনালাইসিসের কয়েকটি প্রকারভেদ কী কী?",
          answer: "ডেটা এনালাইসিসের প্রধান প্রকারভেদ হল Descriptive (বর্ণনামূলক), Diagnostic (কারণ বিশ্লেষণ), Predictive (ভবিষ্যৎ পূর্বাভাস), এবং Prescriptive (সমাধান প্রস্তাব)।",
          explanation: "যেমন, বর্ণনামূলক এনালাইসিস দেখায় কী ঘটেছে, আর ভবিষ্যৎ পূর্বাভাস বলে দেয় কী ঘটতে পারে।"
        },
        {
          question: "ডেটা ক্লিনিং কেন গুরুত্বপূর্ণ?",
          answer: "ডেটা ক্লিনিং গুরুত্বপূর্ণ কারণ এটি ত্রুটিপূর্ণ বা অসঙ্গতিপূর্ণ ডেটা ঠিক করে, যাতে বিশ্লেষণ সঠিক হয়।",
          explanation: "যেমন, যদি কোনো ডেটাসেটে কিছু মান অনুপস্থিত থাকে, তাহলে সেগুলো ঠিক করা বা বাদ দেওয়া প্রয়োজন।"
        },
        {
          question: "Missing Value কী?",
          answer: "যেসব সেলে ডেটা অনুপস্থিত বা খালি থাকে তা Missing Value।",
          explanation: "বিশ্লেষণে বাধা সৃষ্টি করে, তাই এই ডেটা ফিল্টার, ইনপুট বা বাদ দিতে হয়।"
        },
        {
          question: "Central Tendency বলতে কী বোঝায়?",
          answer: "ডেটার গড় (Mean), মাঝের মান (Median), ও সবচেয়ে বেশি দেখা যায় এমন মান (Mode)।",
          explanation: "এটি ডেটাসেটের কেন্দ্রীয় মান নির্ধারণে সাহায্য করে।"
        },
        {
          question: "Standard Deviation কী বোঝায়?",
          answer: "এটি ডেটা গড় থেকে কতটা ছড়ানো তা পরিমাপ করে।",
          explanation: "ডেটা গড়ের চারপাশে কতটা পরিবর্তনশীল তা বোঝার জন্য ব্যবহৃত হয়।"
        },
        {
          question: "Correlation কী?",
          answer: "দুটি ভ্যারিয়েবলের মধ্যে সম্পর্ক বোঝায়।",
          explanation: "যদি এক ভ্যারিয়েবল বাড়লে অন্যটিও বাড়ে, তবে তা Positive; কমলে Negative।"
        },
        {
          question: "Outlier কী?",
          answer: "ডেটার এমন মান যা অন্য সব মান থেকে অনেক আলাদা।",
          explanation: "এটি বিশ্লেষণে ভুল নির্দেশনা দিতে পারে, তাই তা চিহ্নিত ও ব্যবস্থাপনা প্রয়োজন।"
        },
        {
          question: "ডেটা এনালাইসিসে Software টুল কী কী?",
          answer: "Excel, Power BI, Tableau, Python, R প্রভৃতি।",
          explanation: "এই সফটওয়্যারগুলো ডেটা ক্লিনিং, বিশ্লেষণ, মডেলিং ও রিপোটিং-এ ব্যবহৃত হয়।"
        }
      ]
    },
    {
      title: "ডেটা টাইপস",
      questions: [
        {
          question: "ডেটার প্রধান দুটি ধরন কী কী?",
          answer: "ডেটার দুটি প্রধান ধরন হল Quantitative (সংখ্যাসূচক) এবং Qualitative (বর্ণনামূলক)।",
          explanation: "যেমন, বয়স হল সংখ্যাসূচক ডেটা, আর লিঙ্গ হল বর্ণনামূলক ডেটা।"
        },
        {
          question: "Quantitative ডেটার উদাহরণ দাও",
          answer: "উদাহরণ: বয়স, উচ্চতা, ওজন, আয় ইত্যাদি।",
          explanation: "এই ডেটাগুলো সংখ্যায় প্রকাশ করা যায় এবং গাণিতিক হিসাব করা যায়।"
        },
        {
          question: "Nominal ডেটা কী?",
          answer: "Nominal ডেটা হল যেগুলো কোনো ক্রম বা মান ছাড়াই শুধু বর্ণনামূলক।",
          explanation: "যেমন, লিঙ্গ (পুরুষ/মহিলা), জাতীয়তা (বাংলাদেশি, ভারতীয়)।"
        }
,
        {
          question: "Ordinal ডেটার বৈশিষ্ট্য কী?",
          answer: "Ordinal ডেটার বৈশিষ্ট্য হল এটি কোনো ক্রম বা র‍্যাঙ্কিং নির্দেশ করে।",
          explanation: "যেমন, শিক্ষাগত যোগ্যতা (এসএসসি < এইচএসসি < বিএসসি)।"
        }
,
        {
          question: "Binary ডেটা কী?",
          answer: "Binary ডেটা হল যেগুলো দুটি মানের মধ্যে একটি নির্বাচন করে, যেমন: হ্যাঁ/না, ০/১।",
          explanation: "যেমন, একজন ব্যক্তি কি ধূমপান করে (হ্যাঁ/না)?"
        },
        {
          question: "গাণিতিক ডেটা টাইপ কী কী?",
          answer: "দুইটি – Discrete (পূর্ণসংখ্যা) এবং Continuous (ভগ্নাংশসহ)।",
          explanation: "Discrete মানে গণনাযোগ্য সংখ্যা (যেমন: ছাত্র সংখ্যা), আর Continuous মানে মাপযোগ্য (যেমন: উচ্চতা, ওজন)।"
        },
        {
          question: "Categorical ডেটার উদাহরণ দিন।",
          answer: "লিঙ্গ (পুরুষ/নারী), বিভাগ (A/B/C), দেশ (বাংলাদেশ, ভারত)।",
          explanation: "এগুলো সংখ্যায় না, বরং নাম বা শ্রেণিভুক্ত তথ্য।"
        },
        {
          question: "Text/String টাইপের ডেটা কী?",
          answer: "অক্ষর, শব্দ বা বাক্য নিয়ে গঠিত ডেটা।",
          explanation: "যেমন: নাম, ঠিকানা, মন্তব্য ইত্যাদি টেক্সট হিসেবে গণ্য হয়।"
        },
        {
          question: "Date/Time ডেটা টাইপ কী?",
          answer: "তারিখ এবং সময় সম্পর্কিত ডেটা।",
          explanation: "যেমন: 22-04-2025 বা 12:30 PM, সময়সীমা ভিত্তিক বিশ্লেষণের জন্য ব্যবহৃত হয়।"
        },
        {
          question: "ডেটা টাইপ নির্ধারণ কেন গুরুত্বপূর্ণ?",
          answer: "সঠিক বিশ্লেষণ ও অপারেশনের জন্য ডেটা টাইপ জানা জরুরি।",
          explanation: "ভুল টাইপের ডেটায় ফর্মুলা বা ফিল্টার সঠিক কাজ করবে না।"
        },
        {
          question: "SQL-এ সাধারণত কোন ডেটা টাইপ ব্যবহার হয়?",
          answer: "INT, VARCHAR, DATE, FLOAT, BOOLEAN ইত্যাদি।",
          explanation: "বিভিন্ন টেবিল কলামে উপযুক্ত মান রাখার জন্য ডেটা টাইপ ব্যবহার হয়।"
        },
        {
          question: "Power BI তে ডেটা টাইপ কিভাবে পরিবর্তন করবেন?",
          answer: "Power Query → Data Type dropdown → পছন্দসই টাইপ নির্বাচন করুন।",
          explanation: "ভুল টাইপ থাকলে বিশ্লেষণ ভুল হতে পারে, তাই Type Transform করা জরুরি।"
        }

      ]
    },
    {
      title: "ডেটা ভিজ্যুয়ালাইজেশন",
      questions: [
        {
          question: "ডেটা ভিজ্যুয়ালাইজেশন কেন গুরুত্বপূর্ণ?",
          answer: "ডেটা ভিজ্যুয়ালাইজেশন গুরুত্বপূর্ণ কারণ এটি ডেটা থেকে অর্থপূর্ণ তথ্য দ্রুত এবং সহজে বুঝতে সাহায্য করে।",
          explanation: "যেমন, একটি বার চার্ট দেখে আমরা সহজেই বুঝতে পারি কোন পণ্য বেশি বিক্রি হয়েছে।"
        },
        {
          question: "ডেটা ভিজ্যুয়ালাইজেশনের কয়েকটি টুলের নাম বলো।",
          answer: "উদাহরণ: Tableau, Power BI, Matplotlib, Seaborn",
          explanation: "এই টুলগুলো ব্যবহার করে ডেটাকে চার্ট, গ্রাফ এবং ড্যাশবোর্ডে রূপান্তর করা যায়।"
        },
        {
          question: "বার চার্ট কখন ব্যবহার করা হয়?",
          answer: "বার চার্ট ব্যবহার করা হয় যখন বিভিন্ন ক্যাটাগরির মধ্যে তুলনা করতে হয়।",
          explanation: "যেমন, বিভিন্ন বছরে কোম্পানির আয় তুলনা করা"
        },
        {
          question: "পাই চার্ট কী ধরনের ডেটা প্রদর্শনে ব্যবহৃত হয়?",
          answer: "পাই চার্ট সাধারণত শতকরা অনুপাত বা ভাগ প্রদর্শনে ব্যবহৃত হয়",
          explanation: "যেমন, একটি কোম্পানির বিভিন্ন পণ্যের বিক্রির শতকরা অনুপাত"
        },
        {
          question: "হিস্টোগ্রাম এবং বার চার্টের মধ্যে পার্থক্য কী?",
          answer: "হিস্টোগ্রাম কোনো নির্দিষ্ট রেঞ্জের ডেটা বণ্টন দেখায়, অন্যদিকে বার চার্ট বিভিন্ন ক্যাটাগরির মধ্যে তুলনা করে।",
          explanation: "যেমন, হিস্টোগ্রাম দেখায় কতজন ছাত্রের মার্ক ৫০-৬০ এর মধ্যে আছে, বার চার্ট দেখায় কোন বিভাগে কতজন ছাত্র আছে।"
        },
        {
          question: "Excel-এ কোন কোন টুল ডেটা অ্যানালাইসিসে সাহায্য করে?",
          answer: " Filter, Pivot Table, What-If Analysis, Data Validation, Conditional Formatting।",
          explanation: "এগুলো ব্যবহার করে ডেটা সংক্ষিপ্ত, বিশ্লেষণযোগ্য এবং দৃশ্যমান করা যায়।"
        },
        {
          question: "Power BI তে সবচেয়ে ব্যবহৃত ভিজ্যুয়াল কোনটি?",
          answer: "Bar Chart, Column Chart, Line Chart, Pie Chart, Card।",
          explanation: "এগুলো ব্যবহার করে ট্রেন্ড, তুলনা, অনুপাত ইত্যাদি দেখানো হয়।"
        },
        {
          question: "চার্ট এবং টেবিলের মধ্যে পার্থক্য কী?",
          answer: "চার্ট ভিজ্যুয়াল, টেবিল টেক্সচুয়াল উপস্থাপন করে।",
          explanation: "চার্ট চোখে পড়া সহজ, আর টেবিল বিশদ বিশ্লেষণে সহায়ক।"
        },
        {
          question: "কেন ডেটা ক্লিনিং গুরুত্বপূর্ণ?",
          answer: "বিশ্লেষণের পূর্বশর্ত সঠিক ডেটা।",
          explanation: "ভুল বা ডুপ্লিকেট ডেটা থাকলে বিশ্লেষণও ভুল হবে।"
        },
        {
          question: "ফিল্টারিং ও স্লাইসিংয়ের পার্থক্য কী Power BI-তে?",
          answer: "ফিল্টার সব রিপোর্টে প্রভাব ফেলে, স্লাইসার সাধারণত পৃষ্ঠা/ভিজ্যুয়াল ভিত্তিক।",
          explanation: "স্লাইসার ব্যবহার করে ইউজার ইন্টার‍্যাক্টিভভাবে ভিউ পরিবর্তন করতে পারে।"
        },
        {
          question: "Measures ও Calculated Columns এর মধ্যে পার্থক্য কী Power BI-তে?",
          answer: "Measure ফলাফল ক্যালকুলেশন দেয়, Calculated Column নতুন কলাম তৈরি করে।",
          explanation: " Measure কম রিসোর্স নেয়, বড় ডেটার জন্য Measure বেশি কার্যকর।"
        },
        {
          question: "ট্রেন্ড বিশ্লেষণ কোন ভিজ্যুয়াল ভালো করে?",
          answer: "Line Chart।",
          explanation: "সময়ের সাথে পরিবর্তন দেখাতে এটি সবচেয়ে কার্যকর ভিজ্যুয়াল।"
        },
        {
          question: "কিভাবে ভালো ডেটা ভিজ্যুয়াল ডিজাইন করবেন?",
          answer: "উপযুক্ত চার্ট নির্বাচন, রঙের ব্যালান্স, কম টেক্সট ও পরিষ্কার লেবেল ব্যবহার।",
          explanation: "ভিজ্যুয়াল যত সহজ ও অর্থবোধক হবে, তত ভালোভাবে ব্যবহারকারী বুঝতে পারবে।"
        }
      ]
    },
    {
      title: "স্ট্যাটিস্টিক্যাল এনালাইসিস",
      questions: [
        {
          question: "স্ট্যাটিস্টিক্যাল অ্যানালাইসিস কী?",
          answer: "ডেটা থেকে অর্থপূর্ণ সিদ্ধান্ত বা উপসংহার টানার প্রক্রিয়া।",
          explanation: "এতে গাণিতিক নিয়ম, ফর্মুলা ও মডেল ব্যবহার করে ডেটা বিশ্লেষণ করা হয়।"
        },
        {
          question: "Descriptive Statistics কী?",
          answer: "ডেটার সারাংশ দেখানোর পদ্ধতি যেমন Mean, Median, Mode।",
          explanation: " এটা মূলত ডেটা কীভাবে ছড়ানো তা বোঝায়।"
        },
        {
          question: "Mean কী?",
          answer: "Mean হল ডেটাসেটের সকল মানের গড়।",
          explanation: "যেমন, যদি তিনটি সংখ্যা ২, ৪, ৬ হয়, তবে Mean = (২+৪+৬)/৩ = ৪"
        },
        {
          question: "Median কীভাবে গণনা করা হয়?",
          answer: "Median হল ডেটাসেটের মধ্যম মান, যখন ডেটা ক্রমানুসারে সাজানো থাকে।",
          explanation: "যেমন, ডেটা: ১, ৩, ৫, ৭, ৯ → Median = ৫।"
        },
        {
          question: "Mode কী?",
          answer: "Mode হল ডেটাসেটে সবচেয়ে বেশি বার আসা মান",
          explanation: "যেমন, ডেটা: ২, ৩, ৩, ৪, ৫ → Mode = ৩"
        }
,
        {
          question: "Variance ও Standard Deviation কী?",
          answer: "ডেটা গড় থেকে কতটা বিচ্যুত তা মাপে।",
          explanation: "Standard Deviation √Variance, মানে ডেটার ছড়ানোর পরিমাপ।"
        }
,
        {
          question: "Correlation কী?",
          answer: "Correlation দুটি ভেরিয়েবলের মধ্যে সম্পর্কের মাত্রা পরিমাপ করে।",
          explanation: "যেমন, যদি আয় বাড়লে ব্যয় বাড়ে, তবে এটি ধনাত্মক Correlation।"
        }
        ,
        {
          question: "Z-score কী?",
          answer: "একটি মান গড় থেকে কত স্ট্যান্ডার্ড ডেভিয়েশন দূরে তা বোঝায়।",
          explanation: "এটি Outlier বা ব্যতিক্রমী মান শনাক্তে সাহায্য করে।"
        }
        ,
        {
          question: "p-value কী?",
          answer: "হাইপোথিসিস পরীক্ষায় ফলাফল কতটা গুরুত্বপূর্ণ তা বোঝায়।",
          explanation: " p < 0.05 হলে সাধারণত ফলাফলকে Significant ধরা হয়"
        }
        ,
        {
          question: "Hypothesis Testing কী?",
          answer: "অনুমান যাচাই করার জন্য পরিসংখ্যান ব্যবহার করা।",
          explanation: "Null Hypothesis (H₀) এবং Alternative Hypothesis (H₁) এর মাধ্যমে বিচার করা হয়।"
        }
        ,
        {
          question: "T-test কী কাজে লাগে?",
          answer: "দুটি গোষ্ঠীর গড় তুলনা করতে ব্যবহৃত হয়।",
          explanation: "যেমন, দুটি পণ্যের গড় বিক্রি তুলনা করা।"
        }  ,
        {
          question: "Chi-Square Test কী?",
          answer: "দুইটি ক্যাটাগরিকাল ভেরিয়েবলের সম্পর্ক বিশ্লেষণে ব্যবহৃত হয়।",
          explanation: "এটি পর্যবেক্ষিত ও প্রত্যাশিত ডেটার পার্থক্য বিশ্লেষণ করে।"
        }  ,
        {
          question: "ANOVA কী?",
          answer: "তিন বা ততোধিক গোষ্ঠীর গড় তুলনার পরীক্ষার পদ্ধতি।",
          explanation: "Analysis of Variance (ANOVA) বলে, ভেরিয়েশনের উৎস ব্যাখ্যা করে।"
        }  ,
        {
          question: "Skewness কী?",
          answer: "ডেটার অসমতা বা বাঁকানোতা নির্দেশ করে।",
          explanation: "Positive Skew = ডানদিকে লেজ, Negative Skew = বামদিকে লেজ।"
        }  ,
        {
          question: "Kurtosis কী?",
          answer: "ডেটার পিক বা কেন্দ্রের উচ্চতা বোঝায়।",
          explanation: "High kurtosis = শার্প পিক, Low kurtosis = ফ্ল্যাট পিক।"
        } ,
        {
          question: "Regression Analysis কী?",
          answer: "এক বা একাধিক ভেরিয়েবল দ্বারা একটি ফলাফল ভবিষ্যদ্বাণী করা।",
          explanation: "যেমন, বিজ্ঞাপনের ব্যয় দিয়ে বিক্রয় পূর্বানুমান করা।"
        } ,
        {
          question: "Sampling কেন গুরুত্বপূর্ণ?",
          answer: "বড় গোষ্ঠী থেকে প্রতিনিধিত্বমূলক ছোট নমুনা নিয়ে বিশ্লেষণ করা।",
          explanation: "এতে সময়, খরচ ও প্রচেষ্টার সাশ্রয় হয়; তবে সঠিক স্যাম্পলিং গুরুত্বপূর্ণ।"
        }

      ]
    },
    {
      title: "মেশিন লার্নিং এনালাইসিস",
      questions: [
        {
          question: "মেশিন লার্নিং কী?",
          answer: "এটি এমন একটি পদ্ধতি যেখানে মেশিন বা কম্পিউটার ডেটা থেকে শিখে ভবিষ্যৎ সিদ্ধান্ত নিতে পারে।.",
          explanation: "এখানে প্রোগ্রামিং ছাড়াই অ্যালগরিদম শিখে ফেলে ডেটা থেকে প্যাটার্ন।"
        },
        {
          question: "মেশিন লার্নিং এর মূল ভাগ কয়টি?",
          answer: "তিনটি – Supervised, Unsupervised এবং Reinforcement Learning।",
          explanation: "Supervised: লেবেলসহ ডেটা, Unsupervised: লেবেল ছাড়া, Reinforcement: ট্রায়াল ও রিওয়ার্ড ভিত্তিক।"
        }
        ,
        {
          question: "Supervised Learning কী?",
          answer: "যেখানে ইনপুটের সাথে আউটপুট লেবেল দেওয়া থাকে।",
          explanation: "উদাহরণ: ছাত্রের নম্বর (ইনপুট) দিয়ে গ্রেড (আউটপুট) শেখানো।"
        },
        {
          question: "Unsupervised Learning কী?",
          answer: "যেখানে কেবল ইনপুট ডেটা থাকে, আউটপুট নেই।",
          explanation: "মেশিন নিজে প্যাটার্ন বা গ্রুপ খুঁজে বের করে। উদাহরণ: ক্লাস্টারিং।"
        },
        {
          question: "Regression কী?",
          answer: "এটি Supervised Learning-এর একটি ধরণ যা সংখ্যামূলক আউটপুট পূর্বানুমান করে।",
          explanation: "যেমন বিজ্ঞাপন খরচ দিয়ে বিক্রয়ের পরিমাণ প্রেডিক্ট করা।"
        },
        {
          question: "Classification কী?",
          answer: "Supervised Learning যেখানে আউটপুট ক্যাটাগরিকাল হয়।",
          explanation: "যেমন ইমেইল স্প্যাম কিনা – হ্যাঁ/না।"
        },
        {
          question: "Clustering কী?",
          answer: " Unsupervised Learning এর একটি ধরণ যেখানে ডেটাকে গ্রুপে ভাগ করা হয়।",
          explanation: "K-Means Algorithm দিয়ে কাস্টমার সেগমেন্টেশন।"
        },
        {
          question: " Overfitting কী?",
          answer: "যখন মডেল ট্রেনিং ডেটায় খুব ভালো পারফর্ম করে কিন্তু নতুন ডেটায় ব্যর্থ হয়।",
          explanation: "কারণ, মডেল অতিরিক্ত শিখে ফেলেছে এমন তথ্য যা ভবিষ্যৎ ডেটায় প্রযোজ্য নয়।"
        },
        {
          question: "Underfitting কী?",
          answer: "যখন মডেল না ট্রেনিং না টেস্ট ডেটায় ভালো কাজ করে।.",
          explanation: "সাধারণত মডেল খুব সহজ অথবা কম ফিচার ব্যবহার করছে।"
        },
        {
          question: "Feature Engineering কী?",
          answer: "র ডেটা থেকে নতুন ফিচার তৈরি করা বা দরকারি ফিচার নির্বাচন করা।",
          explanation: "এটি মডেলের পারফরম্যান্স বাড়াতে সাহায্য করে।"
        },
        {
          question: "Train-Test Split কেন করা হয়?",
          answer: "মডেল যেন নতুন ডেটায় পারফর্ম করে তা যাচাই করার জন্য।",
          explanation: "সাধারণত ৭০-৩০ বা ৮০-২০ ভাগে ডেটা ভাগ করা হয়।"
        },
        {
          question: "Confusion Matrix কী?",
          answer: "Classification মডেলের পারফরম্যান্স যাচাইয়ের টুল।",
          explanation: "এটা দেখায় কতগুলো True Positive, False Positive ইত্যাদি হয়েছে।."
        },
        {
          question: "Accuracy, Precision, Recall পার্থক্য কী?",
          answer: "Accuracy: মোট সঠিক প্রেডিকশনের হার, Precision: প্রেডিক্টেড Positive এর মধ্যে আসল Positive কত, Recall: মোট আসল Positive এর মধ্যে কতটুকু ধরা হয়েছে",
          explanation: "একটি ক্লাস ইমব্যালান্সড হলে Precision/Recall বেশি গুরুত্বপূর্ণ।"
        }
      ]
    },
    {
      title: "ডেটা ক্লিনিং এবং প্রিপ্রসেসিং",
      questions: [
        {
          question: "ডেটা ক্লিনিং কী?",
          answer: "এটি এমন একটি প্রক্রিয়া যার মাধ্যমে অশুদ্ধ বা ভুল ডেটা ঠিক করা হয়।",
          explanation: "যেমন Null ভ্যালু সরানো, ভুল টাইপ ঠিক করা, ডুপ্লিকেট মুছে ফেলা ইত্যাদি।"
        },
        {
          question: "Missing Value বলতে কী বোঝায়?",
          answer: "যেখানে কোনো তথ্য অনুপস্থিত থাকে।",
          explanation: "যেমন কোনো ব্যক্তির বয়সের ঘরে ডেটা না থাকা।"
        },
        {
          question: "Missing Value কীভাবে হ্যান্ডেল করা যায়?",
          answer: "ডেটা ডিলিট, Mean/Median/Mode দিয়ে ফিল, বা ফিল করার জন্য মডেল ব্যবহার।",
          explanation: "নির্ভর করে কী পরিমাণ ডেটা মিসিং এবং সেটির গুরুত্ব কতটুকু।"
        },
        {
          question: "ডুপ্লিকেট ডেটা কী?",
          answer: "একই তথ্য একাধিকবার থাকা।",
          explanation: "যেমন এক ব্যক্তির নাম বা তথ্য একইভাবে দুই বা ততোধিকবার থাকা।"
        },
        {
          question: "ডেটা স্ট্যান্ডার্ডাইজেশন কী?",
          answer: "ভিন্ন স্কেল বা ইউনিটের ডেটাকে একই স্কেলে আনা।",
          explanation: "যেমন: বয়স (১০-৮০), আয় (১০০০–৫০০০০০) — সবকে ০ থেকে ১ স্কেলে আনা।"
        },
        {
          question: "Normalization ও Standardization এর পার্থক্য কী?",
          answer: "Normalization: ডেটাকে ০ থেকে ১ স্কেলে আনে, Standardization: ডেটার Mean = 0 এবং Std Dev = 1 করে ",
          explanation: "মেশিন লার্নিং মডেলে স্কেলিং দরকার হয় যাতে অ্যালগরিদম কাজ করতে পারে ঠিকভাবে।"
        },
        {
          question: "Outlier কী?",
          answer: "এমন ডেটা পয়েন্ট যা অন্যান্য থেকে অনেক বেশি বা কম।",
          explanation: "যেমন সবার বয়স ২০–৩০, একজনের বয়স ৯৯৯ — এটা outlier।"
        },
        {
          question: "Outlier কিভাবে ডিটেক্ট করবেন?",
          answer: "Box Plot, Z-Score, IQR বা ভিজ্যুয়াল অ্যানালাইসিস দিয়ে।",
          explanation: "Outlier বুঝতে হলে গ্রাফিকাল উপায় অনেক কার্যকর।"
        },
        {
          question: "Categorical Data কিভাবে Encode করবেন?",
          answer: "Label Encoding বা One-Hot Encoding ব্যবহার করে।",
          explanation: "মেশিন লার্নিং অ্যালগরিদম সংখ্যার সাথে কাজ করে, তাই পাঠ্য ডেটাকে সংখ্যা বানানো দরকার।"
        },
        {
          question: "Feature Scaling কেন প্রয়োজন?",
          answer: "যেন সব ভেরিয়েবল সমান গুরুত্ব পায় মডেল ট্রেনিংয়ে।",
          explanation: "বড় ভ্যালু ছোট ভ্যালুকে প্রভাবিত না করে।"
        },
        {
          question: "ডেটা টাইপ ঠিক না থাকলে কী সমস্যা হয়?",
          answer: "অ্যানালাইসিস বা মডেল চালাতে ভুল ফলাফল আসে।",
          explanation: "যেমন বয়স কলামে “Twenty” লেখা থাকলে গড় বের করা সম্ভব না।"
        },
        {
          question: "Text Data Clean করতে কী করণীয়?",
          answer: "Lowercase করা, Punctuation সরানো, Stop Words বাদ দেওয়া।",
          explanation: "এটি NLP বা টেক্সট অ্যানালাইসিসে খুব দরকারি।"
        },
        {
          question: "প্রিপ্রসেসিং কেন জরুরি?",
          answer: "কারণ মডেল ট্রেনিংয়ের আগে ডেটা প্রস্তুত করা না হলে ভুল ফলাফল আসবে।",
          explanation: "ক্লিন, স্কেল ও রূপান্তর ছাড়া মডেল ভালোভাবে শেখে না।"
        }
      ]
    },
    {
      title: "ডেটা মডেলিং",
      questions: [
        {
          question: "ডেটা মডেলিং কী?",
          answer: "ডেটার কাঠামো ও সম্পর্ক স্থাপন করার প্রক্রিয়া।",
          explanation: "এটি একটি পদ্ধতি যার মাধ্যমে বিভিন্ন টেবিল, কলাম এবং তাদের মধ্যকার সম্পর্ক ডিজাইন করা হয় যাতে অ্যানালাইসিস সহজ হয়।"
        },
        {
          question: "ডেটা মডেলিং কেন প্রয়োজন?",
          answer: "বিশ্লেষণযোগ্য এবং কার্যকর ডেটা স্ট্রাকচার তৈরি করতে।",
          explanation: "একটি ভালো মডেল ডেটার গুণমান উন্নত করে এবং বিশ্লেষণকে দ্রুত ও নির্ভুল করে।"
        },
        {
          question: "Entity বলতে কী বোঝায়?",
          answer: "বাস্তব জীবনের কোনো বস্তু বা ধারণা, যা সম্পর্কে তথ্য রাখা হয়।",
          explanation: "যেমন Student, Product, Employee — এগুলোর জন্য টেবিল তৈরি হয়।"
        },
        {
          question: "Relationship কী?",
          answer: "দুটি টেবিলের মধ্যে সংযোগ বোঝায়।",
          explanation: "যেমন একটি Customer টেবিল এবং একটি Order টেবিলের মধ্যে “CustomerID” এর মাধ্যমে সম্পর্ক থাকতে পারে।"
        },
        {
          question: "Primary Key কী?",
          answer: "টেবিলের এমন একটি কলাম যা প্রতিটি রোকে ইউনিকভাবে চিহ্নিত করে।",
          explanation: "যেমন StudentID যদি একেকজন স্টুডেন্টকে আলাদা করে চিহ্নিত করে, তাহলে সেটি Primary Key।"
        },
        {
          question: "Foreign Key কী?",
          answer: "অন্য টেবিলের Primary Key কে Reference করে এমন কলাম।",
          explanation: "Order টেবিলে থাকা CustomerID হলো Customer টেবিলের Primary Key এর রেফারেন্স।"
        },
        {
          question: "Fact Table ও Dimension Table এর পার্থক্য কী?",
          answer: "Fact Table: সংখ্যা বা পরিমাপ সংরক্ষণ করে (যেমন: Sales, Revenue), Dimension Table: বর্ণনামূলক তথ্য রাখে (যেমন: Product Name, Region)",
          explanation: "বিশ্লেষণের জন্য এই দুই ধরনের টেবিল দরকার হয়।"
        },
        {
          question: "Normalization ও Denormalization এর পার্থক্য কী?",
          answer: "Normalization: ডেটাকে ছোট ছোট টেবিলে ভাঙা হয় ডেটা রিপিটেশন কমাতে।, Denormalization: বিশ্লেষণ সহজ করার জন্য টেবিল একত্র করা হয়। ",
          explanation: "ডেটা মডেলিংয়ে সাধারণত Denormalized স্ট্রাকচার (Star Schema) বেশি ব্যবহৃত হয়। "
        },
        {
          question: "Power BI-তে ডেটা মডেলিং কোথা থেকে করা যায়?",
          answer: "“Model” ভিউ থেকে টেবিল ও সম্পর্ক যুক্ত করা যায়।",
          explanation: "এখানে ড্র্যাগ করে Table গুলো যুক্ত করা যায়, Cardinality ঠিক করা যায়, Direction বদলানো যায় ইত্যাদি।"
        }
      ]
    },
    {
      title: "ডেটা স্টোরেজ এবং ম্যানেজমেন্ট",
      questions: [
        {
          question: "ডেটা স্টোরেজ কী?",
          answer: "ডেটা সংরক্ষণের প্রক্রিয়া ও প্রযুক্তি।",
          explanation: "তথ্য ফাইল, ডেটাবেজ, ক্লাউড, হার্ড ড্রাইভ বা সার্ভারে সংরক্ষণ করার প্রক্রিয়াকেই ডেটা স্টোরেজ বলা হয়।"
        },
        {
          question: "স্ট্রাকচার্ড ও আনস্ট্রাকচার্ড ডেটার পার্থক্য কী?",
          answer: "স্ট্রাকচার্ড ডেটা: টেবিলের মধ্যে সাজানো থাকে (যেমন SQL)। আনস্ট্রাকচার্ড ডেটা: নির্দিষ্ট ফর্মেট ছাড়া ডেটা (যেমন ছবি, ভিডিও, টেক্সট ফাইল)।",
          explanation: "স্ট্রাকচার্ড ডেটা সহজে বিশ্লেষণযোগ্য, আনস্ট্রাকচার্ড ডেটার জন্য বিশেষ টুল দরকার হয়।."
        },
        {
          question: "ডেটাবেস কী?",
          answer: "একটি সংগঠিত ডেটা সংগ্রহ যা সহজে প্রবেশযোগ্য ও ম্যানেজযোগ্য।.",
          explanation: "ডেটাবেজ সফটওয়্যারের মাধ্যমে বড় ডেটাসেট সংরক্ষণ ও পরিচালনা করা হয়।"
        },
        {
          question: "রিলেশনাল ডেটাবেজ কী?",
          answer: "টেবিলভিত্তিক ডেটাবেজ যেখানে টেবিলগুলোর মধ্যে সম্পর্ক থাকে।",
          explanation: "যেমন MySQL, SQL Server, Oracle – এগুলো রিলেশনাল ডেটাবেজ।."
        },
        {
          question: "NoSQL ডেটাবেজ কী?",
          answer: "নন-টেবুলার ডেটা সংরক্ষণের জন্য ব্যবহৃত ডেটাবেজ।",
          explanation: "যেমন Document, Key-Value, Graph — MongoDB, Cassandra ইত্যাদি।"
        },
        {
          question: "ডেটা ব্যাকআপ কেন গুরুত্বপূর্ণ?",
          answer: "মূল ডেটা হারিয়ে গেলে পুনরুদ্ধারের জন্য।",
          explanation: "হার্ডওয়্যার ব্যর্থতা, হ্যাকিং বা ভুল ডিলিট হলে ব্যাকআপ থেকে রিকভার করা যায়।"
        },
        {
          question: "ক্লাউড স্টোরেজ কী?",
          answer: "ইন্টারনেটের মাধ্যমে ডেটা সংরক্ষণের পদ্ধতি।",
          explanation: " Google Drive, Dropbox, OneDrive, AWS S3 – ক্লাউডে স্টোরেজ সুবিধা দেয়।"
        },
        {
          question: "ডেটা ওয়্যারহাউজ কী?",
          answer: "বিশ্লেষণের জন্য তৈরি বড় আকারের ডেটা সংরক্ষণের ব্যবস্থা।",
          explanation: "এটি OLAP (Online Analytical Processing) সাপোর্ট করে, যেমন Snowflake, Redshift।"
        },
        {
          question: "OLTP ও OLAP এর মধ্যে পার্থক্য কী?",
          answer: "OLTP: রিয়েলটাইম ট্রানজ্যাকশন ব্যবস্থাপনা (যেমন ব্যাংকিং), OLAP: বিশ্লেষণমূলক প্রশ্নের জন্য ব্যবহৃত হয়।",
          explanation: "OLTP দ্রুত ট্রানজ্যাকশনের জন্য অপটিমাইজড, OLAP রিপোর্টিং ও ডেটা বিশ্লেষণে কাজ করে।"
        },
        {
          question: "ডেটা রিটেনশন পলিসি কী?",
          answer: "কতদিন ডেটা সংরক্ষণ করতে হবে তা নির্ধারণ করার নিয়ম।",
          explanation: "কোম্পানির নিরাপত্তা, আইনগত বিষয় ও স্টোরেজ ব্যবস্থাপনায় এই নিয়ম দরকার হয়।"
        },
        {
          question: "ডেটা রিডান্ডেন্সি কী?",
          answer: "একই ডেটার একাধিক স্থানে পুনরাবৃত্তি হওয়া।",
          explanation: "এটি স্পেস নষ্ট করে এবং ইনকনসিস্টেন্সি তৈরি করতে পারে। নরমালাইজেশন করে এটি কমানো হয়।"
        },
        {
          question: "ইনডেক্সিং কী এবং কেন করা হয়",
          answer: "ডেটা দ্রুত খুঁজে বের করার জন্য টেবিলে ইনডেক্স তৈরি করা হয়।",
          explanation: "এটি সার্চ ও কোয়েরি স্পিড বাড়ায়, যেমন একটি বইয়ে সূচিপত্র।"
        },
        {
          question: "ডেটা সিকিউরিটি কিভাবে নিশ্চিত করা যায়?",
          answer: "এনক্রিপশন, অথেনটিকেশন, এবং এক্সেস কন্ট্রোল ব্যবহার করে।",
          explanation: "এটি নিশ্চিত করে যে শুধু অনুমোদিত ব্যবহারকারী ডেটা দেখতে ও পরিবর্তন করতে পারে।"
        }
      ]
    },
    {
      title: "ডেটা এনালাইসিস টুলস এবং প্রযুক্তি",
      questions: [
        {
          question: "Python কেন ডেটা এনালাইসিসে জনপ্রিয়?",
          answer: "Python জনপ্রিয় কারণ এটি সহজ সিনট্যাক্স এবং শক্তিশালী লাইব্রেরি (যেমন: Pandas, NumPy, Matplotlib) দিয়ে ডেটা এনালাইসিস করা যায়।",
          explanation: "যেমন, Pandas ব্যবহার করে ডেটা ক্লিনিং এবং ম্যানিপুলেশন করা যায়।"
        },
        {
          question: "R প্রোগ্রামিং কী?",
          answer: "R হল একটি প্রোগ্রামিং ভাষা যা স্ট্যাটিস্টিক্যাল এনালাইসিস এবং ডেটা ভিজ্যুয়ালাইজেশনের জন্য ব্যবহৃত হয়।",
          explanation: "যেমন, R ব্যবহার করে জটিল স্ট্যাটিস্টিক্যাল মডেল তৈরি করা যায়।."
        },
        {
          question: "Excel কি ডেটা এনালাইসিসের জন্য উপযোগী?",
          answer: "হ্যাঁ, Excel ছোট থেকে মাঝারি আকারের ডেটা এনালাইসিসের জন্য খুবই উপযোগী।",
          explanation: "যেমন, Excel ব্যবহার করে ডেটা সাজানো, ফিল্টার করা এবং চার্ট তৈরি করা যায়।"
        },
        {
          question: "Tableau কী?",
          answer: "Tableau হল একটি ডেটা ভিজ্যুয়ালাইজেশন টুল যা ডেটা থেকে অর্থপূর্ণ তথ্য প্রদানে সাহায্য করে।",
          explanation: "যেমন, Power BI ব্যবহার করে ব্যবসায়িক প্রতিবেদন তৈরি করা যায়।"
        },
        {
          question: "Power BI কী?",
          answer: "Power BI হল মাইক্রোসফ্টের একটি বিজনেস অ্যানালিটিক্স টুল যা ডেটা ভিজ্যুয়ালাইজেশন এবং বিশ্লেষণের জন্য ব্যবহৃত হয়।",
          explanation: "যেমন, Power BI ব্যবহার করে ব্যবসায়িক প্রতিবেদন তৈরি করা যায়।"
        },
        {
          question: "SQL কী?",
          answer: "SQL (Structured Query Language) হল ডেটা বেজ থেকে ডেটা প্রশ্ন করা এবং পরিচালনা করার জন্য ব্যবহৃত একটি প্রোগ্রামিং ভাষা।",
          explanation: "যেমন, SQL ব্যবহার করে ডেটা খুঁজে বের করা এবং সংশোধন করা যায়।"
        },
        {
          question: "NoSQL ডেটাবেজ কী?",
          answer: "NoSQL ডেটাবেজ হল অ-স্ট্রাকচার্ড ডেটা সংরক্ষণের জন্য ব্যবহৃত ডেটাবেজ যেমন MongoDB, Cassandra।",
          explanation: "যেমন, সোশ্যাল মিডিয়া ডেটা সংরক্ষণের জন্য NoSQL ডেটাবেজ ব্যবহৃত হয়।"
        },
        {
          question: "Google Data Studio কী?",
          answer: "Google-এর ফ্রি রিপোর্টিং টুল।",
          explanation: " Google Sheets, Analytics, BigQuery থেকে ডেটা নিয়ে ড্যাশবোর্ড তৈরি করা যায়।"
        },
        {
          question: "KNIME কী?",
          answer: "একটি ওপেন-সোর্স ডেটা অ্যানালাইসিস ও মেশিন লার্নিং প্ল্যাটফর্ম।",
          explanation: "কোডিং ছাড়াও Node-based ফ্লো তৈরি করে ডেটা প্রসেসিং করা যায়।"
        },
        {
          question: " Jupyter Notebook কেন ব্যবহৃত হয়?",
          answer: "Python ও R দিয়ে কোড, নোট ও ভিজ্যুয়াল একসাথে লিখতে।",
          explanation: "এটি ইন্টার‍্যাক্টিভ অ্যানালাইসিস এবং ডেটা বিজ্ঞান শেখার জন্য অসাধারণ টুল।"
        },
        {
          question: "Hadoop কী?",
          answer: "একটি বিগ ডেটা স্টোরেজ ও প্রসেসিং ফ্রেমওয়ার্ক।",
          explanation: "বিশাল ডেটা পারালাল প্রসেস করতে পারে, ডেটা সেন্টারে ব্যবহৃত হয়।"
        },
        {
          question: "Apache Spark কী?",
          answer: "ফাস্ট ইন-মেমোরি বিগ ডেটা অ্যানালাইসিস টুল।",
          explanation: "Real-time stream এবং batch ডেটা প্রসেসে ব্যবহৃত হয়।"
        },
        {
          question: "Data Warehouse কী?",
          answer: "Data Warehouse হল একটি কেন্দ্রীয় স্থান যেখানে বিভিন্ন উৎস থেকে ডেটা সংগ্রহ করে বিশ্লেষণের জন্য সংরক্ষণ করা হয়।",
          explanation: "যেমন, একটি কোম্পানি তাদের সকল বিভাগের ডেটা একটি ওয়্যারহাউসে সংরক্ষণ করে।"
        },

        {
          question: "Cloud Storage কী?",
          answer: "Cloud Storage হল ইন্টারনেটের মাধ্যমে ডেটা সংরক্ষণ এবং অ্যাক্সেস করার একটি পদ্ধতি।",
          explanation: "যেমন, Google Drive বা Amazon S3 ব্যবহার করে ডেটা সংরক্ষণ করা যায়।"
        },
        {
          question: "Data Transformation কী?",
          answer: "Data Transformation হল ডেটাকে একটি ফরম্যাট থেকে অন্য ফরম্যাটে রূপান্তর করা যাতে এটি বিশ্লেষণের জন্য উপযোগী হয়।",
          explanation: "যেমন, টেক্সট ডেটাকে সংখ্যায় রূপান্তর করা।"
        },
        {
          question: "Google BigQuery কী?",
          answer: "Google-এর সার্ভারলেস ডেটা ওয়্যারহাউজ সার্ভিস।",
          explanation: "SQL-এর মাধ্যমে বড় ডেটাসেট বিশ্লেষণ করা যায় — খুব দ্রুত ও স্কেলেবল।"
        },
        {
          question: "ETL টুল কী?",
          answer: " Extract, Transform, Load প্রক্রিয়ায় ডেটা প্রসেস করে।",
          explanation: "Talend, Apache NiFi, Informatica — এগুলো বিভিন্ন সোর্স থেকে ডেটা এনে বিশ্লেষণের উপযোগী করে তোলে।"
        },
        {
          question: "ডেটা মডেলিং টুল কী?",
          answer: "ডেটার গঠন ও সম্পর্ক চিত্রিত করার জন্য ব্যবহৃত টুল।",
          explanation: "যেমন Microsoft Visio, ER/Studio, Lucidchart — ডেটা ম্যাপ ও ফ্লো বুঝতে সাহায্য করে।"
        },
        {
          question: " ডেটা ভিজ্যুয়ালাইজেশনের জন্য কোন টুলগুলো সবচেয়ে ভালো?",
          answer: "Power BI, Tableau, Google Data Studio, Python (Seaborn/Matplotlib), R (ggplot2)।",
          explanation: "এরা ডেটাকে সুন্দর, অর্থপূর্ণ ও সিদ্ধান্ত গ্রহণযোগ্য ভিজ্যুয়াল আকারে উপস্থাপন করে।"
        }
      ]
    }
  ];

  // Populate sidebar with sections
  data.forEach((section, index) => {
    const li = document.createElement('li');
    li.textContent = section.title;
    li.dataset.index = index;

    li.addEventListener('click', () => {
      loadQuestions(section.questions);
      sectionTitle.textContent = section.title;
    });

    sectionList.appendChild(li);
  });

  // Load first section by default
  if (data.length > 0) {
    loadQuestions(data[0].questions);
    sectionTitle.textContent = data[0].title;
  }

  function loadQuestions(questions) {
    questionList.innerHTML = ''; // Clear previous questions

    questions.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="question">
          <i class="fa-solid fa-chevron-right"></i> ${item.question}
        </div>
        <div class="answer">
          <p><strong>Answer:</strong> ${item.answer}</p>
          <p><strong>Explanation:</strong> ${item.explanation}</p>
        </div>
      `;

      // Toggle answer visibility on click
      li.querySelector('.question').addEventListener('click', () => {
        const answer = li.querySelector('.answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });

      questionList.appendChild(li);
    });
  }
});