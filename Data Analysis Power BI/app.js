document.addEventListener('DOMContentLoaded', () => {
  const sectionList = document.getElementById('sectionList');
  const questionList = document.getElementById('questionList');
  const sectionTitle = document.getElementById('sectionTitle');

  // Data directly embedded in app.js
  const data = [
    {
      title: "মৌলিক ধারণা (Basic Concepts)",
      questions: [
        {
          question: "Power BI কী?",
          answer: "Power BI হল মাইক্রোসফটের একটি বিজনেস অ্যানালিটিক্স টুল যা ডেটা ভিজ্যুয়ালাইজেশন এবং বিজনেস ইন্টেলিজেন্স তৈরি করতে ব্যবহৃত হয়।",
          explanation: "Power BI ব্যবহার করে আপনি ডেটা লোড, ট্রান্সফর্ম এবং ভিজ্যুয়ালাইজ করতে পারেন।"
        },
        {
          question: "Power BI Desktop এবং Power BI Service এর মধ্যে পার্থক্য কী?",
          answer: "Power BI Desktop হল একটি ডেস্কটপ অ্যাপ্লিকেশন যা ডেটা মডেলিং এবং রিপোর্ট তৈরির জন্য ব্যবহৃত হয়, অন্যদিকে Power BI Service হল ক্লাউড-ভিত্তিক প্ল্যাটফর্ম যা রিপোর্ট শেয়ার এবং কলাবোরেশনের জন্য ব্যবহৃত হয়।",
          explanation: "Desktop ব্যবহার করে ডেটা প্রসেস করা হয়, আর Service ব্যবহার করে রিপোর্ট প্রকাশ করা হয়।"
        },
      
        {
          question: "Power BI এর প্রধান উপাদানগুলো কী কী?",
          answer: "Power BI এর প্রধান উপাদানগুলো হল: Power Query, Data Modeling, DAX, Visualization, এবং Power BI Service।",
          explanation: "Power Query ডেটা ট্রান্সফর্মেশনের জন্য, DAX ক্যালকুলেশনের জন্য, এবং Visualization ডেটা ভিজ্যুয়ালাইজেশনের জন্য ব্যবহৃত হয়।"
        },
   
        {
          question: "Power BI এর ডেটা সোর্স কী কী হতে পারে?",
          answer: "Power BI এর ডেটা সোর্স হতে পারে Excel, SQL Server, CSV, JSON, API, এবং অন্যান্য ডেটাবেস।",
          explanation: "Power BI বিভিন্ন ডেটা সোর্স থেকে ডেটা আমদানি করতে পারে।"
        },
        {
          question: "Power BI এর ফাইল ফরম্যাট কী?",
          answer: "Power BI এর ফাইল ফরম্যাট হল .pbix",
          explanation: ".pbix ফাইলে ডেটা, মডেল, এবং ভিজ্যুয়ালাইজেশন সবকিছু সংরক্ষিত থাকে।"
        },
        {
          question: "Power BI এর জন্য কী ধরনের লাইসেন্স প্রয়োজন?",
          answer: "Power BI Desktop ফ্রি, কিন্তু Power BI Service এর জন্য Pro বা Premium লাইসেন্স প্রয়োজন।",
          explanation: "Pro লাইসেন্স ইউজার-ভিত্তিক, অন্যদিকে Premium ক্যাপাসিটি-ভিত্তিক।"
        },
        {
          question: "Power BI Mobile App কী?",
          answer: "Power BI Mobile App হল একটি অ্যাপ্লিকেশন যা মোবাইল ডিভাইসে Power BI রিপোর্ট দেখার জন্য ব্যবহৃত হয়।",
          explanation: "এটি iOS, Android, এবং Windows ডিভাইসে ব্যবহার করা যায়।"
        },
        {
          question: "Power BI এর ডেটা রিফ্রেশ কী?",
          answer: "Data Refresh হল ডেটা সোর্স থেকে নতুন ডেটা লোড করার প্রক্রিয়া।",
          explanation: "এটি স্কেজুল করা যায় বা ম্যানুয়ালি রিফ্রেশ করা যায়।"
        },


      ]
    },
    {
      title: "Data Transformation (ডেটা ট্রান্সফর্মেশন)",
      questions: [
        {
          question: "Power Query কী?",
          answer: "Power Query হল একটি ডেটা ট্রান্সফর্মেশন টুল যা ডেটা লোড করা, পরিষ্কার করা এবং ট্রান্সফর্ম করার জন্য ব্যবহৃত হয়।",
          explanation: "এটি ব্যবহার করে আপনি ডেটাকে ফিল্টার, জয়েন, এবং পিভট করতে পারেন।"
        },
        {
          question: "Merge Queries এবং Append Queries এর মধ্যে পার্থক্য কী?",
          answer: "Merge Queries দুটি টেবিলকে জয়েন করে, অন্যদিকে Append Queries দুটি টেবিলের ডেটা একত্রিত করে।",
          explanation: "Merge: SELECT * FROM Table1 INNER JOIN Table2 ON Table1.ID = Table2.ID; Append: UNION ALL"
        },
        {
          question: "Power Query এ কীভাবে ডেটা টাইপ চেঞ্জ করা যায়?",
          answer: "Power Query Editor এ কলাম সিলেক্ট করে 'Data Type' ড্রপডাউন থেকে নতুন ডেটা টাইপ সিলেক্ট করতে হয়।",
          explanation: "যেমন, Text থেকে Number এ কনভার্ট করা যায়।"
        }
,
        {
          question: "Power Query এ কীভাবে ডেটা ক্লিন করা যায়?",
          answer: "Power Query এ 'Remove Rows', 'Replace Values', এবং 'Trim' অপশন ব্যবহার করে ডেটা ক্লিন করা যায়।",
          explanation: "যেমন, খালি সারি বা ডুপ্লিকেট সারি মুছে দেওয়া যায়।"
        }
,
        {
          question: "Power Query এ কীভাবে ডেটা পিভট করা যায়?",
          answer: "Power Query এ 'Pivot Column' অপশন ব্যবহার করে ডেটা পিভট করা যায়।",
          explanation: "এটি ব্যবহার করে আপনি রো থেকে কলামে ডেটা কনভার্ট করতে পারেন।"
        },
        {
          question: "Unpivot কী এবং এটি কীভাবে কাজ করে?",
          answer: "Unpivot হল একটি অপারেশন যা কলামকে রোতে রূপান্তর করে।",
          explanation: "Power Query এ 'Unpivot Columns' ব্যবহার করে এটি করা যায়।"
        },
        {
          question: "Power Query এ কীভাবে কাস্টম কলাম যোগ করা যায়?",
          answer: "Power Query Editor এ 'Add Column' অপশন ব্যবহার করে কাস্টম কলাম যোগ করা যায়।",
          explanation: "এটি ব্যবহার করে আপনি ক্যালকুলেশন বা লজিক্যাল অপারেশন করতে পারেন।"
        },
        {
          question: "Power Query এ কীভাবে ডেটা ডিডুপ্লিকেট করা যায়?",
          answer: "Power Query Editor এ 'Remove Duplicates' অপশন ব্যবহার করে ডেটা ডিডুপ্লিকেট করা যায়।",
          explanation: "এটি ব্যবহার করে আপনি ডুপ্লিকেট সারি মুছে দিতে পারেন।"
        },
        {
          question: "Power Query এ কীভাবে ডেটা সর্ট করা যায়?",
          answer: "Power Query Editor এ 'Sort Ascending' বা 'Sort Descending' অপশন ব্যবহার করে ডেটা সর্ট করা যায়।",
          explanation: "এটি ব্যবহার করে আপনি ডেটাকে কলাম অনুযায়ী সর্ট করতে পারেন"
        }

      ]
    },
    {
      title: "Data Modeling (ডেটা মডেলিং)",
      questions: [
        {
          question: "Star Schema কী?",
          answer: " Star Schema হল একটি ডেটা মডেলিং টেকনিক যেখানে একটি ফ্যাক্ট টেবিল থাকে এবং একাধিক ডাইমেনশন টেবিল থাকে।",
          explanation: "ফ্যাক্ট টেবিলে মেট্রিক্স (যেমন সেলস) থাকে, আর ডাইমেনশন টেবিলে বিবরণ (যেমন প্রোডাক্ট, কাস্টমার) থাকে।"
        },
        {
          question: "Relationship কীভাবে তৈরি করা যায়?",
          answer: "Power BI Desktop এর 'Modeling' ট্যাবে 'Manage Relationships' ব্যবহার করে রিলেশনশিপ তৈরি করা যায়।",
          explanation: "দুটি টেবিলের মধ্যে কমন কলাম ব্যবহার করে রিলেশনশিপ তৈরি করা হয়।"
        },
        {
          question: "Active এবং Inactive Relationship এর মধ্যে পার্থক্য কী?",
          answer: "Active Relationship ডিফল্টভাবে ক্যোয়ারিতে ব্যবহৃত হয়, অন্যদিকে Inactive Relationship ডিফল্টভাবে ব্যবহৃত হয় না।",
          explanation: "Inactive Relationship কে DAX এর USERELATIONSHIP ফাংশন দিয়ে ব্যবহার করা যায়।"
        },
        {
          question: "Snowflake Schema কী?",
          answer: "Snowflake Schema হল Star Schema-এর একটি এক্সটেনশন যেখানে ডাইমেনশন টেবিলগুলো নরমালাইজড থাকে।",
          explanation: "এটি ডেটা রিডানডেন্সি কমায় এবং স্টোরেজ স্পেস বাঁচায়।"
        },
        {
          question: "Cardinality কী?",
          answer: "Cardinality হল দুটি টেবিলের মধ্যে রিলেশনশিপের ধরন।",
          explanation: "এটি হতে পারে One-to-One, One-to-Many, বা Many-to-Many।"
        },
        {
          question: "Cross Filter Direction কী?",
          answer: " Cross Filter Direction হল রিলেশনশিপের দিক যা নির্ধারণ করে কোন টেবিল কোন টেবিলকে ফিল্টার করবে।",
          explanation: "এটি হতে পারে Single বা Both।"
        },
        {
          question: "Active Relationship কীভাবে সেট করা যায়?",
          answer: " Power BI Desktop এর 'Modeling' ট্যাবে 'Manage Relationships' ব্যবহার করে Active Relationship সেট করা যায়।",
          explanation: "শুধু একটি Active Relationship থাকতে পারে।"
        },
        {
          question: "Calculated Column এবং Measure এর মধ্যে পার্থক্য কী?",
          answer: " Calculated Column টেবিলে নতুন কলাম যোগ করে, অন্যদিকে Measure একটি ক্যালকুলেশন যা ভিজ্যুয়ালে ব্যবহৃত হয়।",
          explanation: "Measure ডায়নামিক ক্যালকুলেশনের জন্য ব্যবহৃত হয়।"
        },
        {
          question: "Date Table কী এবং কেন ব্যবহার করা হয়?",
          answer: " Date Table হল একটি টেবিল যা তারিখ সম্পর্কিত ডেটা ধারণ করে।",
          explanation: "এটি টাইম ইন্টেলিজেন্স ফাংশন ব্যবহার করার জন্য গুরুত্বপূর্ণ।"
        }
      ]
    },
    {
      title: "DAX (Data Analysis Expressions)",
      questions: [
        {
          question: "DAX কী?",
          answer: "DAX (Data Analysis Expressions) হল একটি ফর্মুলা ল্যাঙ্গুয়েজ যা ক্যালকুলেশন এবং ডেটা মডেলিংয়ের জন্য ব্যবহৃত হয়।",
          explanation: "যেমন, SUM(), AVERAGE(), CALCULATE() হল DAX ফাংশন।"
        },
        {
          question: "CALCULATE() ফাংশনের কাজ কী?",
          answer: "CALCULATE() ফাংশন ব্যবহৃত হয় নির্দিষ্ট ফিল্টার অ্যাপ্লাই করে ক্যালকুলেশন করার জন্য।",
          explanation: "Total Sales = CALCULATE(SUM(Sales[Amount]), Sales[Year] = 2023)"
        },
        {
          question: "FILTER() ফাংশনের কাজ কী?",
          answer: " FILTER() ফাংশন ব্যবহৃত হয় ডেটা ফিল্টার করার জন্য।",
          explanation: "High Sales = CALCULATE(SUM(Sales[Amount]), FILTER(Sales, Sales[Amount] > 5000))"
        }
,
        {
          question: "ALL() ফাংশনের কাজ কী?",
          answer: "ALL() ফাংশন ব্যবহৃত হয় ফিল্টার অ্যাপ্লাই করা বন্ধ করার জন্য।",
          explanation: "Total Sales = CALCULATE(SUM(Sales[Amount]), ALL(Sales))"
        }
,
        {
          question: "RELATED() ফাংশনের কাজ কী?",
          answer: "RELATED() ফাংশন ব্যবহৃত হয় একটি টেবিল থেকে অন্য টেবিলের মান পুল করার জন্য।",
          explanation: "Customer Name = RELATED(Customers[Name])"
        },
        {
          question: "SUMX() ফাংশনের কাজ কী?",
          answer: "SUMX() ফাংশন ব্যবহৃত হয় একটি টেবিলের প্রতিটি রো উপর ক্যালকুলেশন করে তারপর যোগফল দেওয়ার জন্য।",
          explanation: "Total Sales = SUMX(Sales, Sales[Quantity] * Sales[Price])"
        },

        {
          question: "DAX কোথায় ব্যবহার হয়?",
          answer: "Power BI, Excel-এর Power Pivot, এবং SQL Server Analysis Services (SSAS)-এ।",
          explanation: "যখন আপনি ডেটা মডেলে কাস্টম ক্যালকুলেশন চান, তখন DAX ব্যবহার করতে হয়।"
        },
        {
          question: "DAX ফাংশনগুলোর প্রধান শ্রেণি কী কী?",
          answer: "Aggregation, Filter, Logical, Time Intelligence, Text, Date, Information ইত্যাদি।",
          explanation: "প্রতিটি শ্রেণির ফাংশন ভিন্ন কাজ করে — যেমন SUM যোগ করে, FILTER ডেটা ফিল্টার করে।"
        },
        {
          question: "DISTINCT ফাংশন কী কাজ করে?",
          answer: "একটি কলামের ইউনিক মানগুলোর তালিকা দেয়।",
          explanation: "DISTINCT(Sales[Customer]) → কাস্টমারদের ডুপ্লিকেট ছাড়া লিস্ট।"
        },
        {
          question: "TODAY() ফাংশন কী করে?",
          answer: "বর্তমান তারিখ রিটার্ন করে।",
          explanation: "TODAY() ব্যবহার করে বর্তমান দিনের ভিত্তিতে Time Intelligence ক্যালকুলেশন করা যায়।"
        },
        {
          question: "DAX এ Measures ও Calculated Column-এর পার্থক্য কী?",
          answer: "Measure শুধুমাত্র ক্যালকুলেশন ফলাফল দেয়; Calculated Column প্রতিটি সারির জন্য মান তৈরি করে।",
          explanation: "Measure: সাপেক্ষে কাজ করে যেমন মোট বিক্রয় → Total Sales = SUM(Sales[Amount]), Calculated Column: প্রতি রোতে ফিক্সড মান দেয় → Sales[Tax] = Sales[Amount]*0.1"
        }
      ]
    },
    {
      title: "Visualization (ভিজ্যুয়ালাইজেশন)",
      questions: [
        {
          question: "Power BI এ কত ধরনের ভিজ্যুয়াল আছে?",
          answer: "Power BI এ বিভিন্ন ধরনের ভিজ্যুয়াল আছে, যেমন Bar Chart, Line Chart, Pie Chart, Map, KPI, এবং Custom Visuals।",
          explanation: "প্রতিটি ভিজ্যুয়াল বিভিন্ন ধরনের ডেটা প্রদর্শনের জন্য ব্যবহৃত হয়।"
        },
        {
          question: "Slicer কী?",
          answer: "Slicer হল একটি ইন্টারেক্টিভ ফিল্টার যা রিপোর্টে ডেটা ফিল্টার করার জন্য ব্যবহৃত হয়।",
          explanation: "যেমন, একটি Date Slicer ব্যবহার করে নির্দিষ্ট তারিখের ডেটা দেখা যায়।"
        },
        {
          question: "Drillthrough কী?",
          answer: "Drillthrough হল একটি ফিচার যা একটি রিপোর্ট থেকে অন্য রিপোর্টে ডেটা ড্রিল করার জন্য ব্যবহৃত হয়।",
          explanation: "এটি ব্যবহার করে আপনি ডেটার বিস্তারিত দেখতে পারেন।"
        },
        {
          question: "Tooltip কীভাবে কাজ করে?",
          answer: "Tooltip হল একটি ইন্টারেক্টিভ ফিচার যা ভিজ্যুয়ালের উপর মাউস হোভার করলে অতিরিক্ত তথ্য দেখায়।",
          explanation: "Tooltip কাস্টমাইজ করা যায় এবং নতুন ভিজ্যুয়াল যোগ করা যায়।"
        },
        {
          question: "Bookmarks কীভাবে কাজ করে?",
          answer: "Bookmarks হল একটি ফিচার যা রিপোর্টের বিভিন্ন ভিউ সেভ করার জন্য ব্যবহৃত হয়।",
          explanation: "এটি ব্যবহার করে আপনি ইন্টারেক্টিভ রিপোর্ট তৈরি করতে পারেন।"
        },
        {
          question: "Conditional Formatting কীভাবে কাজ করে?",
          answer: "Conditional Formatting ব্যবহৃত হয় ডেটা ভিত্তিক রঙ বা আইকন প্রদর্শন করার জন্য।",
          explanation: "যেমন, সেলস ডেটার উপর ভিত্তি করে রঙ পরিবর্তন করা যায়।"
        },
        {
          question: "Power BI-তে Visualization বলতে কী বোঝায়?",
          answer: "এটি হলো বিভিন্ন ধরণের চার্ট বা গ্রাফ যা ডেটা উপস্থাপনে ব্যবহৃত হয়।",
          explanation: "যেমন Bar Chart, Line Chart, Pie Chart, Map, Table ইত্যাদি। এসব ব্যবহার করে ডেটাকে সহজে বুঝতে সাহায্য করে।"
        },
        {
          question: "Power BI-তে Bar Chart কবে ব্যবহার করবেন?",
          answer: "যখন আপনাকে বিভিন্ন ক্যাটাগরির তুলনা করতে হবে।",
          explanation: "যেমন বিভিন্ন পণ্যের বিক্রয়ের তুলনা দেখাতে Bar Chart খুব উপযোগী।"
        },
        {
          question: "Donut Chart ও Pie Chart-এর পার্থক্য কী?",
          answer: "Donut Chart-এর মাঝে ফাঁকা থাকে, Pie Chart সম্পূর্ণ পূর্ণ।",
          explanation: "Donut Chart-এ মাঝে মোট মান বা অন্য তথ্য লেখা যায়, যা Pie Chart-এ সম্ভব নয়।"
        },
        {
          question: "Card Visualization কী?",
          answer: "এটি একটি একক মান (যেমন: Total Sales) বড় করে দেখায়।",
          explanation: "এটি দ্রুত নজর কাড়ে ও কোনো KPI বা মেট্রিক উপস্থাপন করতে ব্যবহৃত হয়।"
        },
        {
          question: "Matrix ও Table Visualization-এর মধ্যে পার্থক্য কী?",
          answer: "Table শুধুমাত্র সারি দেখায়, Matrix সারি ও কলামের মতো কাজ করে (Pivot Table এর মতো)।",
          explanation: "Matrix-এ আপনি Row ও Column ফিল্ড দিয়ে গ্রুপিং করতে পারেন, Table-এ তা সম্ভব না।"
        },
        {
          question: "Clustered Column Chart ও Stacked Column Chart-এর পার্থক্য কী?",
          answer: "Clustered Chart-এ মানগুলো পাশাপাশি দেখানো হয়; Stacked Chart-এ একটার উপর আরেকটা দেখানো হয়।",
          explanation: " Clustered-এ তুলনা ভালো হয়, Stacked-এ মোট মান ও কম্পোনেন্ট দুইটাই বোঝা যায়।"
        },
        {
          question: "Tree Map Visualization কেন ব্যবহার করবেন?",
          answer: " যখন আপনি হায়ারার্কিকাল ডেটা ও তার অনুপাত তুলনায় দেখাতে চান।",
          explanation: " যেমন কোন বিভাগে কত বিক্রি হয়েছে, তা আয়তাকার ব্লকের মাধ্যমে দেখায়।"
        },
        {
          question: "Custom Visual কী?",
          answer: "Power BI AppSource থেকে ডাউনলোড করা বিশেষ ভিজ্যুয়াল যা ডিফল্টে থাকে না।",
          explanation: "যেমন: Bullet Chart, Sankey Diagram, KPI Indicator ইত্যাদি আপনি Custom Visual হিসেবে যুক্ত করতে পারেন।"
        }
      ]
    },
    {
      title: "Power BI Service",
      questions: [
        {
          question: "Power BI Service কী?",
          answer: "Power BI Service হল একটি ক্লাউড-ভিত্তিক প্ল্যাটফর্ম যা রিপোর্ট প্রকাশ করা, শেয়ার করা এবং কলাবোরেশনের জন্য ব্যবহৃত হয়।",
          explanation: "এটি ব্যবহার করে আপনি রিপোর্ট ওয়েবে প্রকাশ করতে পারেন।"
        },
        {
          question: "Workspace কী?",
          answer: "Workspace হল একটি স্পেস যেখানে টিম মেম্বাররা রিপোর্ট এবং ড্যাশবোর্ড শেয়ার করতে পারে।",
          explanation: "Workspace ব্যবহার করে টিম কলাবোরেটিভ ভাবে কাজ করতে পারে।"
        },
        {
          question: "Power BI Gateway কী?",
          answer: "Power BI Gateway হল একটি টুল যা অন-প্রিমিসেস ডেটা সোর্সকে Power BI Service এর সাথে সংযুক্ত করে।",
          explanation: "এটি ব্যবহার করে আপনি লাইভ ডেটা কানেকশন তৈরি করতে পারেন।"
        },
        {
          question: "Power BI Pro এবং Power BI Premium এর মধ্যে পার্থক্য কী?",
          answer: "Power BI Pro হল একটি ইউজার-ভিত্তিক লাইসেন্স, অন্যদিকে Power BI Premium হল ক্যাপাসিটি-ভিত্তিক লাইসেন্স।",
          explanation: "Premium এ ডেডিকেটেড রিসোর্স এবং বেশি পারফরম্যান্স পাওয়া যায়।"
        },
        {
          question: "Power BI App কী?",
          answer: "Power BI App হল একটি প্যাকেজ যা একটি Workspace থেকে রিপোর্ট এবং ড্যাশবোর্ড শেয়ার করার জন্য ব্যবহৃত হয়।",
          explanation: "এটি ব্যবহার করে আপনি রিপোর্ট ইন্ডিভিজুয়াল ইউজারের কাছে পাঠাতে পারেন।"
        },
        {
          question: "Power BI Embedding কী?",
          answer: "Power BI Embedding হল একটি ফিচার যা পাওয়ার BI রিপোর্ট অন্য অ্যাপ্লিকেশনে এম্বেড করার জন্য ব্যবহৃত হয়।",
          explanation: "এটি ব্যবহার করে আপনি পাওয়ার BI রিপোর্ট ওয়েব অ্যাপে দেখাতে পারেন।"
        },
        {
          question: " Dashboard ও Report-এর পার্থক্য কী?",
          answer: "রিপোর্টে একাধিক পৃষ্ঠা ও বিস্তারিত ভিজ্যুয়াল থাকে, ড্যাশবোর্ডে এক বা একাধিক রিপোর্ট থেকে নির্বাচিত ভিজ্যুয়াল একত্রে দেখা যায়।",
          explanation: "আপনি দিনে ৮ বার পর্যন্ত Refresh Schedule করতে পারেন (Pro license), যাতে ডেটা সর্বশেষ থাকে।"
        },
        {
          question: "Power BI Service-এ Refresh Schedule কী?",
          answer: "এটি একটি ফিচার যার মাধ্যমে নির্দিষ্ট সময় অনুযায়ী ডেটা অটোমেটিক আপডেট হয়।",
          explanation: "আপনি দিনে ৮ বার পর্যন্ত Refresh Schedule করতে পারেন (Pro license), যাতে ডেটা সর্বশেষ থাকে।"
        },
        {
          question: "Report Sharing কীভাবে হয়?",
          answer: "আপনি রিপোর্ট বা ড্যাশবোর্ড Share বাটন ব্যবহার করে নির্দিষ্ট ইউজার বা গ্রুপের সাথে শেয়ার করতে পারেন।",
          explanation: "শেয়ার করার জন্য প্রাপককে Power BI Pro বা Premium Per User (PPU) লাইসেন্স থাকতে হয়।"
        },
        {
          question: "Q&A Visual কী?",
          answer: "এটি একটি স্মার্ট ভিজ্যুয়াল যেখানে ইউজার প্রাকৃতিক ভাষায় প্রশ্ন করে উত্তর পেতে পারে।",
          explanation: "যেমন “Total sales by month” টাইপ করলে Power BI অটো-চার্ট তৈরি করে।"
        },
        {
          question: "Power BI Service-এ Alert সেট করা যায় কি?",
          answer: "হ্যাঁ, আপনি কার্ড বা গেজ ভিজ্যুয়াল-এ threshold সেট করে Alert ইমেইল পেতে পারেন।",
          explanation: "উদাহরণস্বরূপ, যদি বিক্রি ৫০,০০০ টাকার নিচে যায়, তাহলে স্বয়ংক্রিয়ভাবে ইমেইল পাঠানো হবে।"
        }
      ]
    },
    {
      title: "Advanced Features",
      questions: [
        {
          question: "Row-Level Security (RLS) কী?",
          answer: "RLS হল একটি ফিচার যা ব্যবহারকারীর ভূমিকা অনুযায়ী ডেটা দেখার অনুমতি দেয়।",
          explanation: "যেমন, একজন ম্যানেজার শুধু তার ডিপার্টমেন্টের ডেটা দেখতে পারে।"
        },
        {
          question: "Power BI API কী?",
          answer: "Power BI API হল একটি টুল যা ডেভেলপারদের পাওয়ার BI এর সাথে কাস্টম অ্যাপ্লিকেশন ইন্টিগ্রেট করতে সাহায্য করে।",
          explanation: "এটি REST API ব্যবহার করে ডেটা এবং রিপোর্ট ম্যানেজ করা যায়।"
        },
        {
          question: "What-If Parameter কী?",
          answer: " What-If Parameter হল একটি ফিচার যা ব্যবহারকারীকে ভ্যারিয়েবল পরিবর্তন করে ডেটা পর্যবেক্ষণ করার জন্য ব্যবহৃত হয়।",
          explanation: "যেমন, ডিসকাউন্ট রেট পরিবর্তন করে সেলস ইম্প্যাক্ট দেখা যায়।"
        },
        {
          question: "AI Insights কী??",
          answer: "AI Insights হল একটি ফিচার যা ডেটা অ্যানালাইসিসের জন্য মেশিন লার্নিং ব্যবহার করে।",
          explanation: "এটি ব্যবহার করে আপনি ফরেকাস্টিং এবং ক্লাস্টারিং করতে পারেন।"
        },
        {
          question: "Power BI API কী?",
          answer: "Power BI API হল একটি টুল যা ডেভেলপারদের পাওয়ার BI এর সাথে কাস্টম অ্যাপ্লিকেশন ইন্টিগ্রেট করতে সাহায্য করে।",
          explanation: "এটি REST API ব্যবহার করে ডেটা এবং রিপোর্ট ম্যানেজ করা যায়।"
        },
        {
          question: "What is Power BI Dataflow?",
          answer: "Dataflow হলো Power Query-ভিত্তিক ডেটা প্রিপারেশন টুল যা Power BI Service-এ চলে।",
          explanation: "এটি একটি ক্লাউড-ভিত্তিক ETL (Extract, Transform, Load) টুল যা ডেটা প্রসেসিং ও ক্লিনিং করার পর বহু রিপোর্টে ব্যবহৃত হতে পারে।"
        },
        {
          question: "What is Composite Model in Power BI?",
          answer: "এটি এমন একটি মডেল যেখানে Import এবং DirectQuery উভয় ডেটা সোর্স একত্রে ব্যবহার করা যায়।",
          explanation: "আপনি একই রিপোর্টে কিছু ডেটা লোকালি ইমপোর্ট করে রাখবেন এবং কিছু ডেটা সরাসরি লাইভ কানেকশন থেকে ব্যবহার করবেন।"
        },
        {
          question: "What is Incremental Refresh?",
          answer: "এটি একটি ফিচার যা পুরনো ডেটা রেখে নতুন ডেটা আপডেট করে, পুরো ডেটাসেট রিফ্রেশ না করে।",
          explanation: "বড় ডেটাসেটের ক্ষেত্রে এটি দ্রুত রিফ্রেশ ও কার্যকারিতা নিশ্চিত করে।"
        },
        {
          question: "What is Aggregations in Power BI?",
          answer: "এটি বড় ডেটার উপর রোল-আপ ডেটা তৈরি করে পারফরমেন্স বাড়ায়।",
          explanation: "উদাহরণস্বরূপ, আপনি যদি প্রতি দিন বিক্রয়ের ডেটা সংগ্রহ করেন, তবে Aggregation ব্যবহার করে আপনি মাসিক বা বার্ষিক সারাংশ তৈরি করতে পারেন।"
        },
        {
          question: "What is Calculation Group?",
          answer: "এটি DAX ব্যবহার করে একাধিক মেজারকে গ্রুপ করার একটি পদ্ধতি।",
          explanation: "উদাহরণস্বরূপ, “YoY”, “MoM”, “YTD” — এই মেজারগুলোকে এক গ্রুপে রেখে ব্যবহার সহজ করা যায়।"
        },
        {
          question: "What is Power BI Paginated Report?",
          answer: "এটি formatted, print-ready রিপোর্ট যা pixel-perfect আকারে তৈরি করা যায়।",
          explanation: "SQL Server Reporting Services (SSRS)-এর মতো রিপোর্ট যা অনেক পৃষ্ঠা ও প্যারামিটারসহ তৈরি করা হয়।"
        },
        {
          question: "What is XMLA Endpoint?",
          answer: "এটি Power BI Dataset-এ Analysis Services এর মতো কানেক্ট করে উন্নত মডেলিং করা যায়।",
          explanation: "এটি ট্যাবুলার এডিটর বা Visual Studio দিয়ে Dataset ডেভেলপমেন্টে সহায়তা করে।"
        },
        {
          question: "What is Deployment Pipeline in Power BI?",
          answer: "এটি Dev → Test → Prod পরিবেশে রিপোর্ট ও Dataset রোলআউট করার পদ্ধতি।",
          explanation: "টিম ভিত্তিক কাজের জন্য এটি version control ও environment management সহজ করে।"
        },
        {
          question: "What is Sensitivity Label in Power BI?",
          answer: "এটি রিপোর্ট বা ডেটা কনটেন্টে security ও classification ট্যাগ দেয়।",
          explanation: "উদাহরণস্বরূপ, কোনো ফাইলকে “Confidential” হিসেবে ট্যাগ করলে শেয়ার করার সময় সতর্কতা দেওয়া হয়।"
        },
        {
          question: "What is Power BI Goals and Scorecard?",
          answer: "এটি এমন একটি ফিচার যা কিপিআই (KPI) ট্র্যাক করতে ও বিজনেস টার্গেট নিরীক্ষণে সাহায্য করে।",
          explanation: "Scorecard তৈরি করে টিম পারফরম্যান্স নিরীক্ষা করা যায় এবং অগ্রগতি ভিজ্যুয়ালি দেখা যায়।"
        }
      ]
    },
    {
      title: "Performance Optimization",
      questions: [
        {
          question: "Power BI এ পারফরম্যান্স অপ্টিমাইজেশনের জন্য কী করা যায়?",
          answer: "ডেটা মডেল সিম্প্লিফাই করা, অপ্রয়োজনীয় কলাম মুছে দেওয়া, এবং ইনডেক্সিং ব্যবহার করা।",
          explanation: "ডেটা মডেল ছোট করলে পারফরম্যান্স বেড়ে যায়।"
        },
        {
          question: "Aggregations কীভাবে পারফরম্যান্স বাড়ায়?",
          answer: "Aggregations ব্যবহার করে ডেটা প্রি-ক্যালকুলেটেড হয়, যা কুয়েরি টাইম কমায়।",
          explanation: "এটি বড় ডেটাসেটের জন্য ব্যবহার করা হয়।"
        },
        {
          question: "Incremental Refresh কী?",
          answer: "Incremental Refresh হল একটি ফিচার যা বড় ডেটাসেটের জন্য ডেটা আংশিকভাবে রিফ্রেশ করার জন্য ব্যবহৃত হয়।",
          explanation: "এটি ব্যবহার করে আপনি শুধু নতুন ডেটা লোড করতে পারেন।"
        },
        {
          question: "Power BI তে Performance Optimization কেন গুরুত্বপূর্ণ?",
          answer: " দ্রুত লোডিং, উন্নত ইউজার এক্সপেরিয়েন্স এবং কম রিসোর্স ব্যবহারের জন্য।",
          explanation: "ধীর রিপোর্ট ইউজারদের বিরক্ত করে এবং বড় ডেটাসেটের কারণে রিসোর্স নষ্ট হয়। তাই পারফরম্যান্স টিউনিং অপরিহার্য।"
        },
        {
          question: "Import vs DirectQuery – কোনটি পারফরম্যান্সে ভালো?",
          answer: "Import সাধারণত DirectQuery থেকে দ্রুততর হয়।",
          explanation: "Import মোডে ডেটা আগে থেকেই মডেলে লোড থাকে, DirectQuery প্রতিবার কুয়েরি চালায়, তাই ধীর।"
        },
        {
          question: "VertiPaq Engine কীভাবে পারফরম্যান্স বাড়ায়?",
          answer: "এটি কলামার ডেটা কমপ্রেশন ও ইন-মেমোরি প্রসেসিং করে দ্রুত বিশ্লেষণ করে।",
          explanation: "Power BI-এর Import মডেল মূলত VertiPaq-এ চলে যা কম মেমোরিতে বড় ডেটা রাখে।"
        },
        {
          question: "Unused Column বা টেবিল রেখে দিলে পারফরম্যান্সে কী প্রভাব পড়ে?",
          answer: "অপ্রয়োজনীয় ডেটা রিপোর্টের সাইজ বাড়ায় ও প্রসেসিং ধীর করে।",
          explanation: "কম ব্যবহার হওয়া কলাম বাদ দিলে মডেল হালকা হয় এবং রিফ্রেশ টাইম কমে।"
        },
        {
          question: "Calculated Column vs Measure – কোনটি ভালো পারফরম্যান্সে?",
          answer: "Measure পারফরম্যান্সে অনেক ভালো।",
          explanation: " Calculated Column রিপোর্ট লোডের সময় হিসাব হয়, কিন্তু Measure ইউজার ইন্টারঅ্যাকশনের সময় কাজ করে।"
        },
        {
          question: "DAX Optimized না হলে সমস্যা কী হতে পারে?",
          answer: "ধীর কুয়েরি, বেশি RAM খরচ ও টাইমআউট ইস্যু হতে পারে।",
          explanation: "অপ্রয়োজনীয় FILTER, ALL, CALCULATE ভুলভাবে ব্যবহারে ধীরতা বাড়ে।"
        },
        {
          question: "Cardinality কী এবং এর প্রভাব কী?",
          answer: "একটি কলামে ইউনিক মানের সংখ্যা Cardinality। কম Cardinality ভালো পারফরম্যান্স দেয়।",
          explanation: "যেমন “Gender” এর Cardinality 2 (Male, Female), যেখানে “Name” এর Cardinality হাজার হতে পারে।"
        },
        {
          question: "Relationship কে অপ্টিমাইজ করতে হলে কী করতে হয়?",
          answer: "Active এক-মুখী (Single Directional) রিলেশনশিপ ব্যবহার করা উচিত।",
          explanation: "দ্বিমুখী রিলেশনশিপ (Bi-directional) মডেল জটিল করে এবং স্লো করে দেয়।"
        },
        {
          question: "Aggregation Table কেন ব্যবহার করা হয়?",
          answer: "হাই-লেভেল সারাংশ ডেটা তৈরিতে ব্যবহৃত হয় যা Query Load কমায়।",
          explanation: "পুরো ১০ লাখ রেকর্ডে কুয়েরি না চালিয়ে প্রি-ক্যালকুলেটেড ছোট টেবিল দেখানো হয়।"
        },
        {
          question: "Query Reduction Technique কী?",
          answer: "কম ইন্টারঅ্যাকশনে কম কুয়েরি চালানোর কৌশল।",
          explanation: "যেমন Visual interaction disable করা, slicer ব্যবহার কমানো।"
        },
        {
          question: "Performance Analyzer টুল কীভাবে সাহায্য করে?",
          answer: "এটি প্রতিটি ভিজ্যুয়ালের লোডিং টাইম বিশ্লেষণ করে।",
          explanation: "View → Performance Analyzer চালিয়ে আপনি বুঝতে পারেন কোন ভিজ্যুয়াল বেশি সময় নিচ্ছে।"
        }
      ]
    },
    {
      title: "Integration with Other Tools",
      questions: [
        {
          question: "Power BI কীভাবে Excel এর সাথে ইন্টিগ্রেট করা যায়?",
          answer: "Power BI এবং Excel এর মধ্যে ডেটা ইম্পোর্ট করা যায়, এবং Power BI রিপোর্ট Excel এ এম্বেড করা যায়।",
          explanation: "Excel থেকে Power BI এ ডেটা আমদানি করা যায়।"
        },
        {
          question: "Power BI কীভাবে Python এর সাথে ইন্টিগ্রেট করা যায়?",
          answer: "Power BI এ Python স্ক্রিপ্ট ব্যবহার করে ডেটা ট্রান্সফর্ম এবং ভিজ্যুয়ালাইজেশন করা যায়।",
          explanation: "Power BI Desktop এ 'Python Script' অপশন ব্যবহার করে এটি করা যায়।"
        },
        {
          question: " Power BI এবং Azure Synapse Analytics এর মধ্যে ইন্টিগ্রেশন কীভাবে কাজ করে?",
          answer: "Power BI এবং Azure Synapse Analytics এর মধ্যে ডেটা কানেকশন স্থাপন করে বড় ডেটাসেট প্রসেস করা যায়।",
          explanation: "Synapse থেকে Power BI এ ডেটা লাইভ কানেকশন তৈরি করা যায়।"
        },
        {
          question: " Power BI কী SharePoint এর সাথে কাজ করতে পারে?",
          answer: "হ্যাঁ, SharePoint List বা Document Library থেকে ডেটা এনে ভিজ্যুয়ালাইজ করা যায়।",
          explanation: "SharePoint Online List কে ডেটা সোর্স হিসেবে ব্যবহার করে রিপোর্ট তৈরি করা যায় এবং SharePoint পেজে Power BI রিপোর্ট এমবেড করাও যায়।"
        },
        {
          question: "Power BI কী Microsoft Teams এর সাথে সংযুক্ত করা যায়?",
          answer: "হ্যাঁ, Power BI ট্যাব হিসেবে Teams চ্যানেলে Add করা যায়।",
          explanation: "রিপোর্টগুলো টিম মেম্বারদের সাথে সরাসরি Teams-এ শেয়ার করা যায় এবং আলোচনা করা যায় একই প্ল্যাটফর্মে।"
        },
        {
          question: "Power BI কি SQL Server এর সাথে ইন্টিগ্রেট করা যায়?",
          answer: "হ্যাঁ, SQL Server এর ডেটাবেস Power BI-এর এক প্রধান ডেটা সোর্স।",
          explanation: "Power BI এর মাধ্যমে SQL Server থেকে Real-Time ডেটা ফেচ করা যায় এবং DirectQuery বা Import মোডে ব্যবহার করা যায়।"
        },
        {
          question: "Power BI কী Microsoft Power Automate এর সাথে সংযুক্ত হয়?",
          answer: "হ্যাঁ, Power Automate দিয়ে ট্রিগার ভিত্তিক অটোমেশন করা যায় Power BI এর রিপোর্ট ও ডেটা আপডেট নিয়ে।",
          explanation: "যেমন নির্দিষ্ট ভ্যালু ছাড়িয়ে গেলে ইমেইল পাঠানো, বা রিফ্রেশ শেষে নোটিফিকেশন পাঠানো।"
        },
        {
          question: "Power BI কি Power Apps এর সাথে একত্রে কাজ করে?",
          answer: "হ্যাঁ, Power Apps ফর্মকে Power BI রিপোর্টে এমবেড করা যায়।",
          explanation: "ইউজাররা রিপোর্ট ভিউ করার সময়ই ডেটা এডিট বা ইনপুট দিতে পারেন Power Apps ব্যবহার করে।"
        },
        {
          question: "Power BI কি Salesforce এর সাথে কানেক্ট হতে পারে?",
          answer: "হ্যাঁ, Power BI তে Salesforce connector রয়েছে।",
          explanation: "এতে করে Sales ডেটা, Opportunity, Lead ইত্যাদি বিশ্লেষণ করা যায় ডাইনামিক ভিউতে।"
        },
        {
          question: "Power BI এর REST API কী কাজে লাগে?",
          answer: "REST API দিয়ে ডেটাসেট, রিফ্রেশ, ইউজার পারমিশন ইত্যাদি অটোমেশন ও কাস্টম ইন্টিগ্রেশন করা যায়।",
          explanation: "বড় স্কেলে Power BI পরিচালনায় DevOps বা Custom App থেকে রিপোর্ট ম্যানেজ করা যায় API-এর মাধ্যমে।"
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