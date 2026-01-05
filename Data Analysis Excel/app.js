document.addEventListener('DOMContentLoaded', () => {
  const sectionList = document.getElementById('sectionList');
  const questionList = document.getElementById('questionList');
  const sectionTitle = document.getElementById('sectionTitle');

  // Data directly embedded in app.js
  const data = [
    {
      title: "এক্সেলের পরিচিতি",
      questions: [
        {
          question: "এক্সেল কী?",
          answer: "এক্সেল হল মাইক্রোসফট কর্তৃক তৈরি একটি স্প্রেডশিট সফটওয়্যার। এটি ডেটা সংগ্রহ, বিশ্লেষণ এবং ভিজ্যুয়ালাইজেশনের জন্য ব্যবহৃত হয়।",
          explanation: "এক্সেল ব্যবহার করে আমরা ডেটা টেবিল তৈরি করতে, গাণিতিক হিসাব-নিকাশ করতে এবং চার্ট ও গ্রাফ তৈরি করতে পারি।"
        },
        {
          question: "এক্সেল কী ধরনের সফটওয়্যার?",
          answer: "এক্সেল হলো একটি স্প্রেডশিট সফটওয়্যার।",
          explanation: "এটি স্প্রেডশিট ফরম্যাটে ডেটা সংগ্রহ ও বিশ্লেষণের জন্য ব্যবহৃত হয়, যা টেবিল ফরম্যাটে সাজানো থাকে।"
        },
        {
          question: "এক্সেলের মূল উপাদানগুলো কী কী?",
          answer: "এক্সেলের মূল উপাদানগুলো হলো ওয়ার্কবুক, ওয়ার্কশিট, সেল, রো এবং কলাম।",
          explanation: "ওয়ার্কবুক হলো একটি ফাইল, ওয়ার্কশিট হলো ওয়ার্কবুকের একটি পৃষ্ঠা, সেল হলো রো ও কলামের ছেদবিন্দু।"
        },
        {
          question: "সেল কী?",
          answer: "সেল হলো একটি রো ও কলামের ছেদবিন্দু যেখানে ডেটা ইনপুট করা হয়।",
          explanation: "সেলের অ্যাড্রেস হলো কলামের নাম এবং রো নম্বরের সমন্বয়, যেমন: A1, B2।"
        },
        {
          question: "রো ও কলামের মধ্যে পার্থক্য কী?",
          answer: "রো হলো স্প্রেডশিটের আনুভূমিক লাইন, আর কলাম হলো উল্লম্ব লাইন।",
          explanation: "রোকে নম্বর দিয়ে চিহ্নিত করা হয় (যেমন: 1, 2, 3), আর কলামকে অক্ষর দিয়ে চিহ্নিত করা হয় (যেমন: A, B, C)।"
        },
        {
          question: "ওয়ার্কবুক কী?",
          answer: "ওয়ার্কবুক হলো একটি এক্সেল ফাইল যা এক বা একাধিক ওয়ার্কশিট ধারণ করে।",
          explanation: "ওয়ার্কবুকের ফাইল এক্সটেনশন হলো .xlsx।"
        },
        {
          question: "ওয়ার্কশিট কী?",
          answer: "ওয়ার্কশিট হলো ওয়ার্কবুকের একটি পৃষ্ঠা যেখানে ডেটা ইনপুট করা হয়।",
          explanation: "একটি ওয়ার্কবুকে একাধিক ওয়ার্কশিট থাকতে পারে।"
        },
        {
          question: "রিবন কী?",
          answer: "রিবন হলো এক্সেলের টপ মেনু বার যেখানে বিভিন্ন টুলস এবং ফাংশন থাকে।",
          explanation: "রিবনে হোম, ইনসার্ট, ফরমুলা ইত্যাদি ট্যাব থাকে।"
        },
        {
          question: "ফরমুলা বার কী?",
          answer: "ফরমুলা বার হলো একটি টেক্সট বক্স যেখানে ফর্মুলা লেখা হয়।",
          explanation: "এটি সেলের ভ্যালু বা ফর্মুলা দেখায় এবং এডিট করতে সাহায্য করে।"
        },
        {
          question: "এক্সেলে ডেটা টাইপ কী কী?",
          answer: "এক্সেলের ডেটা টাইপ হলো টেক্সট, নাম্বার, ডেট, টাইম, কারেন্সি ইত্যাদি।",
          explanation: "ডেটা টাইপ নির্ধারণ করে এক্সেল কীভাবে ডেটা প্রসেস করবে তা বুঝতে পারে।"
        },
        {
          question: "এক্সেলে ফর্মুলা কী?",
          answer: "ফর্মুলা হলো একটি গাণিতিক এক্সপ্রেশন যা হিসাব-নিকাশ করে।",
          explanation: "ফর্মুলা সবসময় = চিহ্ন দিয়ে শুরু হয়, যেমন: =A1+B1।"
        },
        {
          question: "ফাংশন কী?",
          answer: "ফাংশন হলো পূর্বনির্ধারিত ফর্মুলা যা নির্দিষ্ট কাজ করে।",
          explanation: "উদাহরণস্বরূপ, SUM() ফাংশন ব্যবহার করে সংখ্যার যোগফল বের করা যায়।"
        },
        {
          question: "সেল রেফারেন্স কী?",
          answer: "সেল রেফারেন্স হলো একটি সেলের অ্যাড্রেস যা ফর্মুলায় ব্যবহৃত হয়।",
          explanation: "উদাহরণস্বরূপ, =A1+B1 এখানে A1 এবং B1 হলো সেল রেফারেন্স।"
        },
        {
          question: "অটোফিল কী?",
          answer: "অটোফিল হলো একটি টুল যা সেলের মান অটোমেটিকভাবে ফিল করে।",
          explanation: " উদাহরণস্বরূপ, একটি সেলে 1 লিখে ড্র্যাগ করলে সিরিজ তৈরি হয় (1, 2, 3...)।"
        },
        {
          question: "এক্সেলে সেভ করার শর্টকাট কী?",
          answer: "সেভ করার শর্টকাট হলো Ctrl + S।",
          explanation: "এটি ব্যবহার করে দ্রুত ফাইল সেভ করা যায়।"
        },
        {
          question: "এক্সেলে কপি ও পেস্ট করার শর্টকাট কী?",
          answer: "কপি করার শর্টকাট হলো Ctrl + C, এবং পেস্ট করার শর্টকাট হলো Ctrl + V।",
          explanation: "এই শর্টকাটগুলো ব্যবহার করে দ্রুত ডেটা কপি ও পেস্ট করা যায়।"
        },
        {
          question: "এক্সেলে ডেটা সর্ট করার উপায় কী?",
          answer: "ডেটা সর্ট করার জন্য Data ট্যাবের Sort অপশন ব্যবহার করতে হয়।",
          explanation: "Data Tab --> Sort option"
        },
        {
          question: "ফরমুলা বার কী?",
          answer: "ফরমুলা বার হলো একটি টেক্সট বক্স যেখানে ফর্মুলা লেখা হয়।",
          explanation: "এটি সেলের ভ্যালু বা ফর্মুলা দেখায় এবং এডিট করতে সাহায্য করে।"
        },
        {
          question: "Cell A1 কী বোঝায়?",
          answer: "Cell A1 কী বোঝায়?",
          explanation: "A কলামের প্রথম সারির ঘরটি A1 নামে পরিচিত।"
        },
        {
          question: "Excel-এ ফর্মুলা শুরু করার জন্য কোন প্রতীক ব্যবহার করা হয়?",
          answer: "সমান চিহ্ন (=)",
          explanation: "ফর্মুলা লিখতে হলে প্রথমে = দিতে হয়, যেমন =A1+B1"
        },
        {
          question: "Excel-এ কতটি কলাম থাকে?",
          answer: "16,384টি কলাম",
          explanation: "কলামগুলো A থেকে শুরু হয়ে XFD পর্যন্ত যায়।"
        },
        {
          question: "Autosum এর কাজ কী?",
          answer: "নির্বাচিত ঘরগুলোর যোগফল বের করা।",
          explanation: "এটি এক ক্লিকে সংখ্যাগুলোর যোগফল দেয়।"
        },
        {
          question: "Excel-এ কতটি সারি (row) থাকে?",
          answer: "1,048,576টি",
          explanation: "এটি হল Excel 2016 বা পরবর্তী ভার্সনগুলোর সীমা।"
        },
      
      ]
    },
    {
      title: "ফর্মুলা ও ফাংশন",
      questions: [
        {
          question: "=SUM(A1:A5) কী কাজ করে?",
          answer: " A1 থেকে A5 পর্যন্ত সকল সংখ্যার যোগফল বের করে।",
          explanation: "SUM ফাংশন একটি নির্দিষ্ট পরিসরের সব সংখ্যার যোগফল দেয়।"
        },
        {
          question: "=AVERAGE(B1:B5) ফাংশন কী দেয়?",
          answer: "নির্দিষ্ট পরিসরের গড় (average)।",
          explanation: "এটি মোট সংখ্যার যোগফলকে মোট আইটেম দিয়ে ভাগ করে গড় নির্ণয় করে।"
        },
        {
          question: "=MAX(C1:C10) কী দেয়?",
          answer: "C1 থেকে C10 পর্যন্ত সবচেয়ে বড় সংখ্যা।",
          explanation: "MAX ফাংশন সবচেয়ে বড় মান নির্ধারণ করে।"
        }
,
        {
          question: "=MIN(D1:D10) এর কাজ কী?",
          answer: "সর্বনিম্ন মান নির্ধারণ করে।",
          explanation: "MIN ফাংশন সবচেয়ে ছোট মান রিটার্ন করে।"
        }
,
        {
          question: "=IF(A1>50,'Pass','Fail') কী নির্দেশ করে?",
          answer: "A1 এর মান ৫০ এর বেশি হলে 'Pass', না হলে 'Fail'",
          explanation: "IF ফাংশন শর্ত অনুযায়ী দুটি মানের একটি প্রদান করে।"
        },
        {
          question: "=COUNT(E1:E10) কী করে?",
          answer: "E1 থেকে E10 এর মধ্যে কয়টি সংখ্যা আছে তা গুনে।",
          explanation: "COUNT শুধুমাত্র সংখ্যাগুলো গুনে।"
        },
        {
          question: "=COUNTA(F1:F10) কী করে?",
          answer: "সব ভরাট সেল (text, number সহ) গণনা করে।",
          explanation: "COUNTA ফাংশন ফাঁকা ছাড়া বাকি সব সেল গুনে।"
        },
        {
          question: "=NOW() কী ফলাফল দেয়?",
          answer: "বর্তমান তারিখ ও সময়।'",
          explanation: "এটি স্বয়ংক্রিয়ভাবে বর্তমান সময় আপডেট করে।"
        },
        {
          question: "=TODAY() কী কাজ করে?",
          answer: "শুধুমাত্র বর্তমান তারিখ প্রদান করে।",
          explanation: "সময় বাদ দিয়ে শুধু তারিখ দেয়।"
        },
        {
          question: "=ROUND(4.567,2) এর মান কী হবে?",
          answer: "4.57",
          explanation: "ROUND ফাংশন নির্দিষ্ট দশমিক পর্যন্ত রাউন্ড করে।"
        },
        {
          question: "=LEN('Excel') এর ফলাফল কী?",
          answer: "5",
          explanation: "LEN ফাংশন টেক্সট স্ট্রিংয়ের অক্ষরের সংখ্যা গণনা করে।"
        }

      ]
    },
    {
      title: "ডেটা ফিল্টার ও সর্টিং",
      questions: [
        {
          question: "Excel-এ ফিল্টার চালু করতে কী করতে হয়?",
          answer: " Data ট্যাবে গিয়ে Filter ক্লিক করতে হয়।",
          explanation: "এতে প্রতিটি কলামের উপরে ড্রপডাউন তৈরি হয়।"
        },
        {
          question: "ASCENDING order কী বোঝায়?",
          answer: "ছোট থেকে বড় (A-Z বা 0-9) সাজানো।",
          explanation: "Alphabet বা সংখ্যা অনুসারে ক্রমবর্ধমানভাবে সাজায়।"
        },
        {
          question: "DESCENDING order কী বোঝায়?",
          answer: "বড় থেকে ছোট (Z-A বা 9-0) সাজানো।",
          explanation: "বিপরীতভাবে সাজায়।"
        },
        {
          question: "একই ডেটা সেলে Filter এবং Sort কি একসাথে করা যায়?",
          answer: "হ্যাঁ",
          explanation: "Filter দিয়ে নির্দিষ্ট মান ফিল্টার করে, Sort দিয়ে অর্ডার ঠিক করা যায়।"
        },
        {
          question: "Multiple column sort কীভাবে করা যায়?",
          answer: "Sort dialog box থেকে লেভেল যোগ করে।",
          explanation: "'Add Level' বাটন দিয়ে একাধিক কলাম অনুযায়ী সাজানো যায়।"
        },
        {
          question: "Custom Sort কী কাজে লাগে?",
          answer: "নিজের মতো করে অর্ডার সেট করতে।",
          explanation: "যেমন: “High”, “Medium”, “Low” এমন অর্ডার।"
        },
        {
          question: "ফিল্টার কীভাবে সরানো যায়?",
          answer: "Clear Filter from… অপশন ব্যবহার করে।",
          explanation: "Filter বাটনে ক্লিক করে ক্লিয়ার করতে হয়।"
        },
        {
          question: "শুধুমাত্র নির্দিষ্ট টেক্সট (যেমন “Passed”) ফিল্টার করতে কিভাবে করবো?",
          answer: "ফিল্টার মেনু থেকে 'Passed' সিলেক্ট করে।",
          explanation: "Checkbox অন করে ফিল্টার হয়।"
        },
        {
          question: "ফিল্টার করা ডেটা কি কপি করা যায়?",
          answer: "হ্যাঁ",
          explanation: "ফিল্টার করা ভিজিবল ডেটা নির্বাচন করে কপি-পেস্ট করা যায়।"
        },
        {
          question: "Sort করার সময় ডেটা গুলিয়ে যায় না কেন?",
          answer: "পুরো টেবিল সিলেক্ট করলে গুলিয়ে যায় না।",
          explanation: "শুধু একটি কলাম সিলেক্ট করলে অন্য কলামের সাথে মিল থাকেনা।"
        },
        {
          question: "Table format এ ফিল্টার কীভাবে স্বয়ংক্রিয় হয়?",
          answer: "Table তৈরি করলেই অটো ফিল্টার আসে।",
          explanation: "Insert → Table দিলে অটো ফিল্টার অপশন চলে আসে।"
        }
      ]
    },
    {
      title: "চার্ট ও ভিজ্যুয়ালাইজেশন",
      questions: [
        {
          question: "Excel-এ চার্ট কী কাজে লাগে?",
          answer: "ডেটাকে ভিজ্যুয়ালি উপস্থাপন করতে।",
          explanation: "সংখ্যাগত তথ্যকে সহজে বোঝার জন্য গ্রাফ বা চার্টে রূপান্তর করা হয়।"
        },
        {
          question: "কোন চার্ট টাইপ ডিফল্ট?",
          answer: "Column Chart",
          explanation: "Insert Chart এ গেলে ডিফল্টভাবে Column টাইপ আসে।"
        },
        {
          question: "Pie Chart কী বোঝায়?",
          answer: "একটি বৃত্ত যা অংশের অনুপাতে বিভক্ত।",
          explanation: "মোট মানের মধ্যে প্রতিটি অংশের অনুপাত দেখায়।"
        }
,
        {
          question: "Line Chart কখন ব্যবহার করা হয়?",
          answer: "সময়ের সাথে পরিবর্তন দেখাতে।",
          explanation: "Trend বা ধারাবাহিকতা বুঝতে লাইন চার্ট ব্যবহার হয়।"
        }
,
        {
          question: "Bar Chart আর Column Chart এর পার্থক্য কী?",
          answer: "Bar চার্টে ডাটা অনুভূমিকভাবে থাকে, Column-এ উল্লম্বভাবে।",
          explanation: "Orientation ভিন্ন।"
        },
        {
          question: "একটি চার্টের টাইটেল কীভাবে পরিবর্তন করবেন?",
          answer: "Chart Title-এ ডাবল ক্লিক করে লেখাটা পরিবর্তন করুন।",
          explanation: "-"
        },
        {
          question: "Chart এর ভিতরে Data Labels কী?",
          answer: "এটি প্রতিটি বার বা পয়েন্টের মান দেখায়।",
          explanation: "মান স্পষ্টভাবে দেখা যায়।"
        },
        {
          question: "একই চার্টে একাধিক ডেটা সিরিজ কীভাবে যোগ করা যায়?",
          answer: "Select Data → Add করে নতুন সিরিজ যোগ করুন।",
          explanation: "-"
        },
        {
          question: "চার্ট রঙ পরিবর্তন করবেন কীভাবে?",
          answer: "চার্ট সিলেক্ট করে “Format” অপশন ব্যবহার করুন।",
          explanation: "-"
        },
        {
          question: "কোন চার্ট শতাংশ দেখাতে ভালো?",
          answer: "Pie Chart",
          explanation: "প্রতিটি ভাগের অনুপাত দেখাতে Pie Chart কার্যকর।"
        },
        {
          question: "Excel-এ চার্ট কীভাবে সরানো যায় অন্য শীটে?",
          answer: "Move Chart অপশন ব্যবহার করে।",
          explanation: "-"
        }

      ]
    },
    {
      title: "ডেটা বিশ্লেষণ",
      questions: [
        {
          question: "Data Validation কী কাজ করে?",
          answer: "নির্দিষ্ট মান ইনপুট নিশ্চিত করে।",
          explanation: "Data Validation ফিচার ব্যবহার করে আপনি সেলে কী ধরনের ইনপুট অনুমোদিত হবে তা নির্ধারণ করতে পারেন। যেমন: কেবল সংখ্যা, নির্দিষ্ট শব্দ, ডেট বা একটি লিস্ট থেকে বেছে নেওয়া। এতে করে ভুল ইনপুট প্রতিরোধ করা যায়।"
        },
        {
          question: "Goal Seek কী?",
          answer: "কোনো নির্দিষ্ট ফলাফল পেতে ইনপুট পরিবর্তন করে।",
          explanation: "Goal Seek এমন একটি টুল যা নির্দিষ্ট আউটপুট পেতে একটি ইনপুট ভ্যারিয়েবল কী হতে হবে তা বের করে দেয়। যেমন: আপনি চান একটি সূত্রের মান ১০০ হোক, Goal Seek বলে দেবে কোন মান দিলে এটা হবে।"
        },
        {
          question: "What-If Analysis এর ব্যবহার কী?",
          answer: "বিভিন্ন ইনপুটে ফলাফল কেমন হবে তা বিশ্লেষণ করা।",
          explanation: "What-If Analysis টুল দিয়ে আপনি বিভিন্ন সম্ভাব্য ইনপুট দিয়ে আউটপুট কী হবে তা দেখে নিতে পারেন। এটি পরিকল্পনা ও সিদ্ধান্ত গ্রহণে সহায়তা করে।"
        },
        {
          question: "Flash Fill কী কাজ করে?",
          answer: "একটি ধারা অনুসারে স্বয়ংক্রিয়ভাবে ডেটা পূরণ করে।",
          explanation: "আপনি যদি একটি কলামে কিছু ডেটা টাইপ করেন এবং Excel বুঝতে পারে আপনি কীভাবে ডেটা সাজাচ্ছেন, তাহলে Flash Fill স্বয়ংক্রিয়ভাবে পরবর্তী ঘরগুলো পূরণ করে দেয়। যেমন: নাম থেকে প্রথম নাম বা শেষ নাম আলাদা করা।"
        },
        {
          question: "Remove Duplicate কী কাজ করে?",
          answer: "এক রকম ডেটা একাধিকবার থাকলে তা মুছে ফেলে।",
          explanation: "যদি কোনো ডেটা একাধিকবার থাকে, তাহলে এই ফিচার ব্যবহার করে আপনি ডুপ্লিকেট রেকর্ড মুছে ফেলতে পারেন এবং শুধু ইউনিক ডেটা রেখে দিতে পারেন।"
        },
        {
          question: "Subtotal ফিচার কী করে?",
          answer: "গ্রুপভিত্তিক উপমোট দেখায়।",
          explanation: "ডেটাকে একটি নির্দিষ্ট কলাম অনুসারে গ্রুপ করে সেই গ্রুপ অনুযায়ী টোটাল, গড়, সর্বোচ্চ/সর্বনিম্ন মান দেখাতে Subtotal ব্যবহার করা হয়।"
        },
        {
          question: "Quick Analysis টুল কী?",
          answer: "সহজে চার্ট, টোটাল, টেবিল প্রভৃতি তৈরি করতে সহায়তা করে।",
          explanation: "কোনো রেঞ্জ নির্বাচন করলে Quick Analysis টুল আইকন আসে, যা থেকে আপনি চার্ট, ডেটা বার, টোটাল, কন্ডিশনাল ফরম্যাটিং প্রভৃতি এক ক্লিকে প্রয়োগ করতে পারেন।"
        },
        {
          question: "Data Table কী কাজ করে?",
          answer: "একাধিক ইনপুটের ভিত্তিতে ফলাফল বিশ্লেষণ করা যায়।",
          explanation: "Data Table ব্যবহার করে আপনি এক বা একাধিক ভেরিয়েবলের মান পরিবর্তন করে তার প্রভাব কেমন হবে তা বিশ্লেষণ করতে পারেন। এটি What-If Analysis এর অংশ।"
        },
        {
          question: "Forecast Sheet কী?",
          answer: "ভবিষ্যতের ডেটা প্রেডিক্ট করে গ্রাফ আকারে দেখায়।",
          explanation: "পূর্ববর্তী ডেটা বিশ্লেষণ করে Forecast Sheet ভবিষ্যতের ডেটা কী হতে পারে তা লাইন বা কলাম গ্রাফ আকারে প্রেডিক্ট করে দেখায়।"
        },
        {
          question: "Consolidate ফিচার কী কাজ করে?",
          answer: "একাধিক শীট বা রেঞ্জ থেকে তথ্য একত্র করে।",
          explanation: "যদি বিভিন্ন ওয়ার্কশিট বা রেঞ্জে একই রকম ডেটা থাকে, তাহলে Consolidate ব্যবহার করে সেই ডেটাগুলো এক জায়গায় যোগফল, গড়, সর্বোচ্চ ইত্যাদি হিসেবে দেখানো যায়।"
        },
        {
          question: "Descriptive Statistics কোথা থেকে চালু করা যায়?",
          answer: "Data Analysis টুলপ্যাক থেকে।",
          explanation: " Descriptive Statistics দিয়ে Mean, Median, Mode, Std Deviation, Minimum, Maximum ইত্যাদি পরিসংখ্যান বিশ্লেষণ করা যায়। এটি চালু করতে Excel-এর Data Analysis টুলপ্যাক ইনস্টল থাকতে হয়।"
        }
      ]
    },
    {
      title: "কন্ডিশনাল ফরম্যাটিং",
      questions: [
        {
          question: "Conditional Formatting কী?",
          answer: "নির্দিষ্ট শর্ত অনুযায়ী সেল স্টাইল পরিবর্তন করা।",
          explanation: "এই ফিচার দিয়ে আপনি সেলের ভ্যালু বা টেক্সটের উপর নির্ভর করে রঙ, ফন্ট স্টাইল, বর্ডার ইত্যাদি স্বয়ংক্রিয়ভাবে পরিবর্তন করতে পারেন। এটি গুরুত্বপূর্ণ ডেটা চোখে পড়ার মতোভাবে উপস্থাপন করে।"
        },
        {
          question: "কিভাবে High Value কে লাল ও Low Value কে সবুজ দেখাবেন?",
          answer: "Conditional Formatting → Color Scale ব্যবহার করে।",
          explanation: "Color Scale সেলের মান অনুযায়ী গ্রেডিয়েন্ট রঙ দেয়। যেমন: সর্বোচ্চ মান লাল ও সর্বনিম্ন মান সবুজ হতে পারে। এটি তুলনামূলক বিশ্লেষণে খুবই কার্যকর।"
        },
        {
          question: " Duplicate Value আলাদা করে দেখাতে কী করবেন?",
          answer: "Highlight Cells Rule → Duplicate Values",
          explanation: "এই অপশনটি সেলগুলোর মধ্যে যদি কোনো মান একাধিকবার আসে, তাহলে সেগুলিকে আলাদা রঙে হাইলাইট করে। এতে করে আপনি সহজেই ডুপ্লিকেট ডেটা শনাক্ত করতে পারবেন।"
        },
        {
          question: "কোন মান ৫০ এর কম হলে অটো রঙ হবে?",
          answer: "New Rule → “Cell Value < 50” → Set Format",
          explanation: "Custom Rule তৈরি করে আপনি নির্দিষ্ট মান যেমন ৫০-এর নিচে হলে সেলকে লাল বা অন্য কোনো রঙে হাইলাইট করতে পারেন। এটি ফিল্টারিং বা সতর্কতা প্রদানে কার্যকর।"
        },
        {
          question: " Top 10 items কিভাবে হাইলাইট করবেন?",
          answer: "Top/Bottom Rules → Top 10 Items",
          explanation: "Excel স্বয়ংক্রিয়ভাবে সেরা ১০টি মান বেছে নিয়ে সেগুলোকে হাইলাইট করে দেয়। আপনি সংখ্যাও পরিবর্তন করতে পারেন যেমন Top 5, Top 3 ইত্যাদি।"
        },
        {
          question: "Data Bar কী?",
          answer: "সেলের ভিতরে বার দেখিয়ে মানের তুলনা দেখায়।",
          explanation: "Data Bar সেলের মানের উপর ভিত্তি করে একটি অনুভূমিক বার দেখায়, যা মানের তুলনামূলক অবস্থান প্রকাশ করে। বড় মানে বড় বার, ছোট মানে ছোট বার হয়।"
        },
        {
          question: "Icon Set কী?",
          answer: "আইকনের মাধ্যমে মানের অবস্থা বোঝায় (উদাঃ: ↑ ↓ →)।",
          explanation: "বিভিন্ন মানের জন্য বিভিন্ন আইকন (তীর চিহ্ন, রঙিন বল, স্টার ইত্যাদি) ব্যবহার করে ডেটার ট্রেন্ড বা অবস্থা বোঝায়। এটি ভিজুয়ালাইজেশনের জন্য খুবই উপযোগী।"
        },
        {
          question: "Custom Formula দিয়ে ফরম্যাটিং কীভাবে করবেন?",
          answer: "Use a formula to determine → =A1>100 → Apply Format",
          explanation: "আপনি যদি শর্তটি নিজে নির্ধারণ করতে চান, তাহলে ফর্মুলা ব্যবহার করতে পারেন। উদাহরণস্বরূপ: A1 সেলে যদি ১০০-এর বেশি হয়, তাহলে সেল লাল হবে।"
        },
        {
          question: "Conditional Formatting কি ফিল্টারিংয়ের সাথে কাজ করে?",
          answer: "হ্যাঁ, ফিল্টার করার পরও রঙ বজায় থাকে।",
          explanation: "যখন আপনি ডেটা ফিল্টার করেন, তখনও শর্ত মোতাবেক প্রয়োগকৃত রঙ বা ফরম্যাট সেলে থেকে যায় এবং সেটি ফিল্টারের পর প্রদর্শিত ডেটাতেও প্রযোজ্য হয়।"
        },
        {
          question: "শর্ত মুছে ফেলতে কী করবেন?",
          answer: "Clear Rules → Entire Sheet বা Selected Cells",
          explanation: "আপনি চাইলে সম্পূর্ণ শীট বা নির্দিষ্ট কিছু সেল থেকে শর্ত মুছে ফেলতে পারেন। এতে করে Conditional Formatting এর রঙ বা স্টাইল সরিয়ে ফেলা যায়।"
        },
        {
          question: "Text content অনুযায়ী রঙ কিভাবে দেবেন?",
          answer: "'Format only cells that contain' → Specific Text",
          explanation: "যদি সেলে নির্দিষ্ট কোনো টেক্সট থাকে (যেমন: 'Pending', 'Completed' ইত্যাদি), তাহলে সে অনুযায়ী আপনি রঙ বা ফন্ট চেঞ্জ করতে পারেন।"
        }
      ]
    },
   
    {
      title: "পিভট টেবিল",
      questions: [
        {
          question: "Pivot Table কী?",
          answer: "ডেটা সংক্ষিপ্তভাবে উপস্থাপন করে বিশ্লেষণের জন্য।",
          explanation: "Pivot Table হলো Excel-এর একটি শক্তিশালী টুল যা বড় ডেটাসেটকে সহজ ও সংক্ষিপ্তভাবে উপস্থাপন করে, যাতে আপনি দ্রুত সারাংশ, উপমোট, গড়, গাণিতিক বিশ্লেষণ ইত্যাদি করতে পারেন।"
        },
        {
          question: "Pivot Table কোথা থেকে বানাবেন?",
          answer: "Insert → Pivot Table",
          explanation: "Excel এ Insert মেনু থেকে Pivot Table নির্বাচন করলে আপনি ডেটা নির্বাচন করে একটি নতুন শীটে বা একই শীটে Pivot Table তৈরি করতে পারেন।"
        },
        {
          question: "Row ও Column Field কী?",
          answer: "Row Field অনুযায়ী সারি তৈরি হয়, Column Field অনুযায়ী কলাম।",
          explanation: "আপনি যেই তথ্য Row Field-এ রাখবেন, তা একেকটা সারি হিসেবে দেখানো হবে। Column Field-এ দিলে তা কলাম আকারে সাজানো হবে। যেমন: প্রোডাক্ট নাম Row Field-এ, বছর Column Field-এ।"
        },
        {
          question: "Value Field কী?",
          answer: "ডেটার উপর অপারেশন যেমন SUM, COUNT করে।",
          explanation: "Value Field-এ আপনি যে সংখ্যাগুলি রাখবেন, সেখানে স্বয়ংক্রিয়ভাবে যোগফল (SUM), গড় (Average), সংখ্যা গণনা (Count) ইত্যাদি করা যাবে।"
        },
        {
          question: "Filter কীভাবে যুক্ত করা যায় Pivot Table-এ?",
          answer: "Report Filter ফিল্ডে আইটেম ড্র্যাগ করে।",
          explanation: "আপনি যদি নির্দিষ্ট কোনো মান অনুযায়ী ফলাফল দেখতে চান (যেমন: শুধুমাত্র ২০২৪ সালের জন্য), তাহলে সেই ফিল্ডটিকে Report Filter অংশে ড্র্যাগ করতে হবে।"
        },
        {
          question: "Pivot Table এ Grouping কিভাবে করবেন?",
          answer: "ডান ক্লিক → Group",
          explanation: "আপনি চাইলে তারিখ, সংখ্যা, বা টেক্সট ডেটাকে গ্রুপ করতে পারেন। যেমন: মাসভিত্তিক তারিখগুলোকে গ্রুপ করা বা বয়সের রেঞ্জ তৈরি করা – এতে বিশ্লেষণ সহজ হয়।"
        },
        {
          question: "Pivot Table থেকে গ্র্যান্ড টোটাল কীভাবে সরাবেন?",
          answer: "Design → Grand Totals → Off",
          explanation: "যদি আপনি সারি বা কলামের মোট যোগফল দেখতে না চান, তাহলে Design মেনুতে গিয়ে Grand Totals অপশন বন্ধ করে দিতে পারেন।"
        },
        {
          question: "Pivot Table Refresh কেন প্রয়োজন?",
          answer: "মূল ডেটা পরিবর্তন হলে তা হালনাগাদ করার জন্য।",
          explanation: "আপনার মূল ডেটাতে যদি কোনো পরিবর্তন হয়, তবে Pivot Table-এ সেই পরিবর্তন আসবে না যতক্ষণ না আপনি Refresh করেন। তাই Update এর জন্য Refresh করা জরুরি।"
        },
        {
          question: "Pivot Chart কী?",
          answer: "Pivot Table ভিত্তিক চার্ট।",
          explanation: "Pivot Table থেকে আপনি সহজেই চার্ট তৈরি করতে পারেন, যাকে Pivot Chart বলে। এটি ডায়নামিক চার্ট যা Pivot Table এর সাথে পরিবর্তিত হয়।."
        },
        {
          question: "একাধিক শীট থেকে Pivot Table তৈরি করা যাবে?",
          answer: "হ্যাঁ, Data Model ব্যবহার করে।",
          explanation: "Excel-এর Data Model ব্যবহার করে আপনি একাধিক টেবিল বা শীট একত্রিত করে একটি Pivot Table বানাতে পারেন। এটি relational database-এর মত কাজ করে।"
        },
        {
          question: "Count এর পরিবর্তে Average দেখাতে?",
          answer: "Value Field Settings → Average",
          explanation: "Pivot Table এ Value Field Settings-এ গিয়ে আপনি Count বা Sum-এর পরিবর্তে Average নির্বাচন করলে প্রতিটি গ্রুপের গড় মান দেখতে পারবেন।"
        }
      ]
    },
    {
      title: "লুকআপ ফাংশন",
      questions: [
        {
          question: "VLOOKUP কী?",
          answer: " এটি একটি ফাংশন যা নির্দিষ্ট মান খুঁজে নিয়ে তার ডান পাশের কলাম থেকে তথ্য ফেরত দেয়।",
          explanation: "উদাহরণস্বরূপ, =VLOOKUP(101,A2:D10,2,FALSE) মানে A2 থেকে D10 রেঞ্জে 101 খুঁজে দ্বিতীয় কলাম থেকে সংশ্লিষ্ট তথ্য দেখায়।"
        },
        {
          question: "HLOOKUP কী?",
          answer: "এটি উপরের সারি থেকে নির্দিষ্ট মান খুঁজে নিচের সারি থেকে তথ্য ফেরত দেয়।",
          explanation: "উদাহরণ: =HLOOKUP('Jan',A1:D3,2,FALSE) — এটি A1 থেকে D3 রেঞ্জে 'Jan' খুঁজে ২য় সারি থেকে মান নেয়।"
        },
        {
          question: "INDEX ফাংশনের কাজ কী?",
          answer: "এটি নির্দিষ্ট সারি ও কলামের অবস্থান থেকে মান ফেরত দেয়।",
          explanation: "যেমন =INDEX(A1:C3,2,3) — ২য় সারি ও ৩য় কলামের ক্রসিং সেলের মান দেখাবে।"
        },
        {
          question: "MATCH ফাংশন কী?",
          answer: "এটি একটি নির্দিষ্ট মান কোন অবস্থানে আছে তা খুঁজে বের করে।",
          explanation: "=MATCH(45,B1:B10,0) — 45 সংখ্যাটি B1:B10 রেঞ্জের কোন পজিশনে আছে, তা দেখায়।"
        },
        {
          question: "XLOOKUP কী এবং এটি কিভাবে VLOOKUP এর চেয়ে উন্নত?",
          answer: "XLOOKUP নতুন ও উন্নত ফাংশন যা বাম বা ডান যেকোনো দিকে খুঁজে তথ্য ফেরত দিতে পারে।",
          explanation: "=XLOOKUP('Ali',A2:A10,B2:B10) — A কলামে 'Ali' খুঁজে B কলাম থেকে মান দেয়। এটি VLOOKUP এর তুলনায় আরও নমনীয়।"
        },
        {
          question: "LOOKUP ফাংশনের ব্যবহার কী?",
          answer: "এটি সরলভাবে একটি মান খুঁজে তার সংশ্লিষ্ট মান রিটার্ন করে।",
          explanation: "=LOOKUP(5,{1,3,5,7},{10,30,50,70}) — এখানে ৫ এর জন্য ৫০ রিটার্ন হবে।"
        },
        {
          question: "VLOOKUP এ FALSE ও TRUE এর পার্থক্য কী?",
          answer: "FALSE মানে সঠিক (exact) মিল, আর TRUE মানে আনুমানিক (approximate) মিল।",
          explanation: "FALSE ব্যবহার করলে অবশ্যই এক্স্যাক্ট মান খুঁজবে, না পেলে #N/A দেখাবে। TRUE ব্যবহার করলে কাছাকাছি মান খুঁজবে।"
        },
        {
          question: "VLOOKUP ত্রুটি (#N/A) এড়াতে কী করবেন?",
          answer: "IFERROR বা IFNA ব্যবহার করতে পারেন।",
          explanation: "=IFERROR(VLOOKUP(...), 'Not Found') — যদি খুঁজে না পায়, তাহলে “Not Found” দেখাবে।"
        },
        {
          question: "কিভাবে VLOOKUP দিয়ে একাধিক শর্তে খোঁজা যায়?",
          answer: "দুটি বা ততোধিক কলাম একত্র করে খোঁজা যেতে পারে।",
          explanation: "নতুন কলামে =A2&B2 দিয়ে একত্র মান তৈরি করে তারপর VLOOKUP ব্যবহার করা যায়।"
        },
        {
          question: "INDEX এবং MATCH একসাথে ব্যবহার করার সুবিধা কী?",
          answer: "এটি VLOOKUP এর চেয়ে বেশি নিয়ন্ত্রণ ও নমনীয়তা দেয়।",
          explanation: "=INDEX(B2:B10,MATCH('Ali',A2:A10,0)) — A কলামে 'Ali' খুঁজে B কলাম থেকে মান দেয়। এটি ডান দিকে সীমাবদ্ধ নয়।"
        },
        {
          question: "XLOOKUP এ যদি মান না মেলে, তখন কী দেখানো যায়?",
          answer: "XLOOKUP এ “if_not_found” প্যারামিটার ব্যবহার করা যায়।",
          explanation: "=XLOOKUP('Zara',A2:A10,B2:B10,'Not Found') — যদি 'Zara' না থাকে, তাহলে “Not Found” দেখাবে।"
        }
      ]
    },

    {
      title: "ম্যাক্রো এবং VBA",
      questions: [
        {
          question: "Macro কী?",
          answer: "Macro হলো Excel-এ পুনরাবৃত্তিমূলক কাজ স্বয়ংক্রিয়ভাবে সম্পাদনের একটি পদ্ধতি।",
          explanation: "আপনি যদি প্রতিদিন একই ধরণের কাজ (যেমন, ফরম্যাটিং, কপি-পেস্ট) করেন, তাহলে ম্যাক্রো রেকর্ড করে একটি ক্লিকে সেই কাজগুলো চালানো যায়।"
        },
        {
          question: "VBA কী?",
          answer: "VBA (Visual Basic for Applications) হলো Excel-এর একটি প্রোগ্রামিং ল্যাঙ্গুয়েজ যা ম্যাক্রো এবং কাস্টম টাস্ক তৈরি করতে ব্যবহৃত হয়।",
          explanation: "আপনি যদি ম্যাক্রোর চেয়ে আরও উন্নত, লজিক ভিত্তিক অটোমেশন করতে চান, তাহলে VBA কোড লেখার প্রয়োজন হয়।"
        },
        {
          question: "কিভাবে একটি Macro রেকর্ড করবেন?",
          answer: "Developer ট্যাব → Record Macro ক্লিক করে শুরু করা যায়।",
          explanation: "আপনি যে কাজ করবেন, Excel সেটি রেকর্ড করে রাখবে। Stop Macro চাপলে রেকর্ডিং বন্ধ হবে।"
        },
        {
          question: "ম্যাক্রো কোথায় সংরক্ষিত থাকে?",
          answer: "ম্যাক্রো Personal Macro Workbook, Current Workbook বা New Workbook-এ সংরক্ষণ করা যায়।",
          explanation: "Personal Macro Workbook-এ রাখলে সব Excel ফাইলে ব্যবহার করা যাবে।"
        },
        {
          question: "VBA Editor কীভাবে খুলবেন?",
          answer: "Alt + F11 চাপলে VBA Editor খুলে যাবে।",
          explanation: "এখানে আপনি ম্যাক্রোর কোড দেখতে, সম্পাদনা করতে বা নতুন কোড লিখতে পারেন।"
        },
        {
          question: "InputBox কী?",
          answer: "এটি ইউজারের কাছ থেকে ইনপুট নেওয়ার জন্য ব্যবহৃত হয়।",
          explanation: "InputBox('Enter your name:') ইউজারকে নাম দিতে বলবে।"
        },
        {
          question: "Sub এবং Function এর পার্থক্য কী?",
          answer: "Sub একটি কাজ সম্পাদন করে, Function কিছু রিটার্ন করে।",
          explanation: "Sub Hello() → কিছু কাজ করে কিন্তু মান রিটার্ন করে না।, Function Add(x, y) → দুই সংখ্যার যোগফল রিটার্ন করে।"
        },
        {
          question: "কিভাবে একটি বাটনে ক্লিক করলে ম্যাক্রো চালানো যাবে?",
          answer: "Insert → Button → Assign Macro ব্যবহার করে।",
          explanation: "আপনি ফর্ম কন্ট্রোলের বাটন বসিয়ে তার সঙ্গে ম্যাক্রো যুক্ত করতে পারেন।"
        },
        {
          question: "xcel ফাইল ম্যাক্রোসহ সংরক্ষণ করতে কী করতে হবে?",
          answer: ".xlsm এক্সটেনশন দিয়ে সংরক্ষণ করতে হবে।",
          explanation: ".xlsx ফাইলে ম্যাক্রো কাজ করে না। ম্যাক্রো চালানোর জন্য অবশ্যই .xlsm ফরম্যাটে সেভ করতে হবে।"
        },
        {
          question: "ম্যাক্রো চালাতে গেলে 'Enable Content' দেখতে পাই কেন?",
          answer: "নিরাপত্তার কারণে Excel ডিফল্টভাবে ম্যাক্রো ব্লক করে রাখে।",
          explanation: "আপনি যদি নিজে তৈরি ম্যাক্রো ব্যবহার করেন, তাহলে 'Enable Content' চাপলে সেটি চালু হবে।"
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