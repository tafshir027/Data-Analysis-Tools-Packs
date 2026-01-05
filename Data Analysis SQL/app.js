document.addEventListener('DOMContentLoaded', () => {
  const sectionList = document.getElementById('sectionList');
  const questionList = document.getElementById('questionList');
  const sectionTitle = document.getElementById('sectionTitle');

  // Data directly embedded in app.js
  const data = [
    {
      title: "মৌলিক SQL (Basic SQL)",
      questions: [
        {
          question: "SQL এর পূর্ণ অর্থ কী?",
          answer: "Structured Query Language",
          explanation: "SQL হল ডাটাবেস ম্যানেজমেন্টের জন্য ব্যবহৃত একটি প্রোগ্রামিং ভাষা। এটি ডাটাবেসে ডেটা ইনসার্ট, আপডেট, ডিলিট এবং রিট্রিভ করার জন্য ব্যবহৃত হয়।"
        },
        {
          question: "SELECT স্টেটমেন্টের কাজ কী?",
          answer: "ডাটাবেস থেকে ডেটা রিট্রিভ করার জন্য SELECT স্টেটমেন্ট ব্যবহৃত হয়।",
          explanation: "SELECT * FROM table_name; এই কমান্ডটি টেবিলের সব কলাম ও সারি থেকে ডেটা প্রদর্শন করে।"
        },
        {
          question: "WHERE ক্লজের কাজ কী?",
          answer: "WHERE ক্লজ ব্যবহৃত হয় নির্দিষ্ট শর্ত অনুযায়ী ডেটা ফিল্টার করার জন্য।",
          explanation: "SELECT * FROM employees WHERE age > 30; এই কমান্ডটি কেবল যাদের বয়স ৩০ এর বেশি তাদের ডেটা দেখাবে।"
        },
        {
          question: "DISTINCT কীভাবে কাজ করে?",
          answer: "DISTINCT কীওয়ার্ড ব্যবহৃত হয় নির্দিষ্ট কলামের অনন্য মানগুলো প্রদর্শন করার জন্য।",
          explanation: "SELECT DISTINCT department_id FROM employees; এই কমান্ডটি বিভিন্ন বিভাগের ID দেখাবে।"
        },
        {
          question: "ORDER BY ক্লজের কাজ কী?",
          answer: "ORDER BY ক্লজ ব্যবহৃত হয় ফলাফলকে বাছাই করার জন্য।",
          explanation: "SELECT * FROM employees ORDER BY salary DESC; এই কমান্ডটি বেতন অনুযায়ী উচ্চতম থেকে সর্বনিম্ন ক্রমে ফলাফল দেখাবে।"
        },
        {
          question: "LIMIT ক্লজের কাজ কী?",
          answer: "LIMIT ক্লজ ব্যবহৃত হয় ফলাফলের সংখ্যা সীমিত করার জন্য।",
          explanation: "SELECT * FROM employees LIMIT 5; এই কমান্ডটি প্রথম ৫টি রেকর্ড দেখাবে।"
        },
        {
          question: "LIKE অপারেটরের কাজ কী?",
          answer: "LIKE অপারেটর ব্যবহৃত হয় প্যাটার্ন ম্যাচিংয়ের জন্য।",
          explanation: "SELECT * FROM employees WHERE name LIKE 'J%'; এই কমান্ডটি যাদের নাম 'J' দিয়ে শুরু হয় তাদের ডেটা দেখাবে।"
        },
        {
          question: "BETWEEN অপারেটরের কাজ কী?",
          answer: "BETWEEN অপারেটর ব্যবহৃত হয় নির্দিষ্ট রেঞ্জের মধ্যে মান খুঁজে পাওয়ার জন্য।",
          explanation: "SELECT * FROM employees WHERE salary BETWEEN 3000 AND 5000;"
        },
        {
          question: "IN অপারেটরের কাজ কী?",
          answer: "IN অপারেটর ব্যবহৃত হয় একাধিক মানের মধ্যে মিল খুঁজে পাওয়ার জন্য।",
          explanation: "SELECT * FROM employees WHERE department_id IN (1, 2, 3);"
        },
        {
          question: "SQL-এ CASE স্টেটমেন্টের কাজ কী?",
          answer: "CASE স্টেটমেন্ট ব্যবহৃত হয় শর্তভিত্তিক লজিক প্রয়োগ করার জন্য।",
          explanation: "SELECT name, CASE WHEN salary > 5000 THEN 'High' ELSE 'Low' END AS salary_status FROM employees;"
        },
        {
          question: "COALESCE() ফাংশনের কাজ কী?",
          answer: "COALESCE() ফাংশন ব্যবহৃত হয় প্রথম নন-নাল মান প্রদর্শন করার জন্য।",
          explanation: "SELECT COALESCE(NULL, NULL, 'Default Value') AS result;"
        },
        {
          question: "NULLIF() ফাংশনের কাজ কী?",
          answer: "NULLIF() ফাংশন ব্যবহৃত হয় দুটি মান সমান হলে NULL রিটার্ন করার জন্য।",
          explanation: "SELECT NULLIF(10, 10) AS result; -- Output: NULL"
        },
        {
          question: "SQL-এ ESCAPE ক্লজের কাজ কী?",
          answer: "ESCAPE ক্লজ ব্যবহৃত হয় LIKE অপারেটরের সাথে বিশেষ অক্ষর (যেমন %, _) ব্যবহার করার সময় এস্কেপ করার জন্য।",
          explanation: "SELECT * FROM employees WHERE name LIKE '%\_%' ESCAPE '\';"
        },
        {
          question: "SQL-এ IS NULL এবং = NULL এর মধ্যে পার্থক্য কী?",
          answer: "IS NULL ব্যবহৃত হয় নাল মান চেক করার জন্য, অন্যদিকে = NULL কাজ করে না কারণ NULL হল একটি অনির্দিষ্ট মান।",
          explanation: "-- Correct usage SELECT * FROM employees WHERE name IS NULL; -- Incorrect usage SELECT * FROM employees WHERE name = NULL;"
        }
      ]
    },
    {
      title: "ডেটা ইনসার্ট, আপডেট ও ডিলিট",
      questions: [
        {
          question: "INSERT INTO স্টেটমেন্টের কাজ কী?",
          answer: "INSERT INTO স্টেটমেন্ট ব্যবহৃত হয় নতুন ডেটা ডাটাবেসে যোগ করার জন্য।",
          explanation: "INSERT INTO employees (name, age) VALUES ('John', 25); এই কমান্ডটি নতুন একটি রেকর্ড যোগ করবে।"
        },
        {
          question: "UPDATE স্টেটমেন্ট কীভাবে কাজ করে?",
          answer: "UPDATE স্টেটমেন্ট ব্যবহৃত হয় ডাটাবেসে বিদ্যমান ডেটা আপডেট করার জন্য।",
          explanation: "UPDATE employees SET age = 30 WHERE name = 'John'; এই কমান্ডটি John-এর বয়স ৩০ করে দেবে।"
        },
        {
          question: "DELETE স্টেটমেন্ট দিয়ে কী করা হয়?",
          answer: "DELETE স্টেটমেন্ট ব্যবহৃত হয় ডাটাবেস থেকে ডেটা মুছে ফেলার জন্য।",
          explanation: "DELETE FROM employees WHERE name = 'John'; এই কমান্ডটি John-এর রেকর্ড মুছে দেবে।"
        }
,
        {
          question: "INSERT INTO স্টেটমেন্টে কীভাবে মাল্টিপল রেকর্ড যোগ করা যায়?",
          answer: "একাধিক মান ব্যবহার করে।",
          explanation: "INSERT INTO employees (name, age) VALUES ('John', 25), ('Doe', 30);"
        }
,
        {
          question: "UPDATE স্টেটমেন্টে WHERE ক্লজ ব্যবহার না করলে কী হবে?",
          answer: "টেবিলের সব রেকর্ড আপডেট হয়ে যাবে।",
          explanation: "UPDATE employees SET salary = 5000; এই কমান্ডটি সব কর্মচারীর বেতন ৫০০০ করে দেবে।"
        },
        {
          question: "TRUNCATE কমান্ডের কাজ কী?",
          answer: "TRUNCATE কমান্ড ব্যবহৃত হয় টেবিলের সব রেকর্ড মুছে ফেলার জন্য।",
          explanation: "TRUNCATE TABLE employees; এই কমান্ডটি কর্মচারী টেবিলের সব ডেটা মুছে দেবে।"
        },
        {
          question: "DEFAULT কনস্ট্রেন্টের কাজ কী?",
          answer: "DEFAULT কনস্ট্রেন্ট ব্যবহৃত হয় কোনো মান না দেওয়া হলে ডিফল্ট মান সেট করার জন্য।",
          explanation: "CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(100), status VARCHAR(20) DEFAULT 'Active');"
        },
        {
          question: "DELETE এবং TRUNCATE এর মধ্যে পার্থক্য কী?",
          answer: "DELETE টেবিলের নির্দিষ্ট রেকর্ড মুছে দেয়, অন্যদিকে TRUNCATE টেবিলের সব রেকর্ড মুছে দেয়।",
          explanation: "DELETE FROM employees WHERE id = 1; এবং TRUNCATE TABLE employees;"
        },
        {
          question: "ON DELETE CASCADE এর কাজ কী?",
          answer: "ON DELETE CASCADE ব্যবহৃত হয় প্যারেন্ট টেবিলের রেকর্ড মুছে ফেলার সময় চাইল্ড টেবিলের সংশ্লিষ্ট রেকর্ডও মুছে ফেলার জন্য।",
          explanation: "ALTER TABLE orders ADD CONSTRAINT fk_employee FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE;"
        },
        {
          question: "MERGE স্টেটমেন্টের কাজ কী?",
          answer: "MERGE স্টেটমেন্ট ব্যবহৃত হয় একটি টেবিলের ডেটা অন্য টেবিলে ইনসার্ট, আপডেট বা ডিলিট করার জন্য।",
          explanation: "MERGE INTO target_table USING source_table ON condition WHEN MATCHED THEN UPDATE SET column = value WHEN NOT MATCHED THEN INSERT (column) VALUES (value);"
        },
        {
          question: "UPSERT কী?",
          answer: "UPSERT হল একটি অপারেশন যা বিদ্যমান রেকর্ড আপডেট করে বা নতুন রেকর্ড ইনসার্ট করে।",
          explanation: "INSERT INTO employees (id, name) VALUES (1, 'John') ON DUPLICATE KEY UPDATE name = 'John';"
        },
        {
          question: "REPLACE স্টেটমেন্টের কাজ কী?",
          answer: "REPLACE স্টেটমেন্ট ব্যবহৃত হয় একটি রেকর্ড ডিলিট করে নতুন রেকর্ড ইনসার্ট করার জন্য।",
          explanation: "REPLACE INTO employees (id, name) VALUES (1, 'John');"
        },
        {
          question: "INSERT INTO স্টেটমেন্টে DEFAULT VALUES কীভাবে ব্যবহার করা যায়?",
          answer: "DEFAULT VALUES ব্যবহৃত হয় টেবিলের ডিফল্ট মান ঢুকানোর জন্য।",
          explanation: "INSERT INTO employees DEFAULT VALUES;"
        },
        {
          question: "UPDATE স্টেটমেন্টে FROM ক্লজ কীভাবে ব্যবহার করা যায়?",
          answer: "FROM ক্লজ ব্যবহৃত হয় অন্য টেবিলের ডেটা ব্যবহার করে আপডেট করার জন্য।",
          explanation: "UPDATE employees SET salary = departments.budget FROM departments WHERE employees.department_id = departments.id;"
        }

      ]
    },
    {
      title: "JOIN",
      questions: [
        {
          question: "INNER JOIN এর কাজ কী?",
          answer: "INNER JOIN ব্যবহৃত হয় দুটি টেবিলের মধ্যে মিল থাকা রেকর্ড প্রদর্শন করার জন্য।",
          explanation: "SELECT employees.name, departments.department_name FROM employees INNER JOIN departments ON employees.department_id = departments.id;"
        },
        {
          question: "LEFT JOIN এর কাজ কী?",
          answer: "LEFT JOIN ব্যবহৃত হয় বাম টেবিলের সব রেকর্ড এবং ডান টেবিলের মিল থাকা রেকর্ড প্রদর্শন করার জন্য।",
          explanation: "SELECT employees.name, departments.department_name FROM employees LEFT JOIN departments ON employees.department_id = departments.id;"
        },
        {
          question: "FULL OUTER JOIN এর কাজ কী?",
          answer: "FULL OUTER JOIN ব্যবহৃত হয় দুটি টেবিলের সব রেকর্ড প্রদর্শন করার জন্য, যেখানে মিল না থাকলে NULL দেখায়।",
          explanation: "SELECT employees.name, departments.department_name FROM employees FULL OUTER JOIN departments ON employees.department_id = departments.id;"
        },
        {
          question: "RIGHT JOIN এর কাজ কী?",
          answer: "RIGHT JOIN ব্যবহৃত হয় ডান টেবিলের সব রেকর্ড এবং বাম টেবিলের মিল থাকা রেকর্ড প্রদর্শন করার জন্য।",
          explanation: "SELECT employees.name, departments.department_name FROM employees RIGHT JOIN departments ON employees.department_id = departments.id;"
        },
        {
          question: "CROSS JOIN এর কাজ কী?",
          answer: "CROSS JOIN ব্যবহৃত হয় দুটি টেবিলের সব সম্ভাব্য কম্বিনেশন প্রদর্শন করার জন্য।",
          explanation: "SELECT employees.name, departments.department_name FROM employees CROSS JOIN departments;"
        },
        {
          question: "SELF JOIN কী?",
          answer: "SELF JOIN হল একটি টেবিলের মধ্যে নিজের সাথে জয়েন করা।",
          explanation: "SELECT e1.name AS employee, e2.name AS manager FROM employees e1 JOIN employees e2 ON e1.manager_id = e2.id;"
        },
        {
          question: "NATURAL JOIN এর কাজ কী?",
          answer: "NATURAL JOIN ব্যবহৃত হয় স্বয়ংক্রিয়ভাবে দুটি টেবিলের মিল থাকা কলাম দিয়ে জয়েন করার জন্য।",
          explanation: "SELECT * FROM employees NATURAL JOIN departments;"
        },        {
          question: "UNION এবং UNION ALL এর মধ্যে পার্থক্য কী?",
          answer: "UNION ডুপ্লিকেট রেকর্ড বাদ দেয়, অন্যদিকে UNION ALL ডুপ্লিকেট রেকর্ড অন্তর্ভুক্ত করে।",
          explanation: "SELECT name FROM employees UNION SELECT name FROM managers;"
        },        {
          question: "FULL OUTER JOIN কীভাবে কাজ করে?",
          answer: "FULL OUTER JOIN ব্যবহৃত হয় দুটি টেবিলের সব রেকর্ড প্রদর্শন করার জন্য, যেখানে মিল না থাকলে NULL দেখায়।",
          explanation: "SELECT employees.name, departments.department_name FROM employees FULL OUTER JOIN departments ON"
        },        {
          question: "INNER JOIN এবং OUTER JOIN এর মধ্যে পার্থক্য কী?",
          answer: "INNER JOIN শুধু মিল থাকা রেকর্ড দেখায়, অন্যদিকে OUTER JOIN মিল না থাকলেও রেকর্ড দেখায়।",
          explanation: "-- INNER JOIN SELECT * FROM employees INNER JOIN departments ON employees.department_id = departments.id;-- LEFT OUTER JOIN SELECT * FROM employees LEFT JOIN departments ON employees.department_id = departments.id;"
        },        {
          question: "CARTESIAN PRODUCT কী?",
          answer: " CARTESIAN PRODUCT হল দুটি টেবিলের সব সম্ভাব্য কম্বিনেশন।",
          explanation: "SELECT * FROM employees, departments;"
        },        {
          question: "JOIN ছাড়া দুটি টেবিলের ডেটা কীভাবে মার্জ করা যায়?",
          answer: "WHERE ক্লজ ব্যবহার করে।",
          explanation: "SELECT employees.name, departments.department_name FROM employees, departments WHERE employees.department_id = departments.id;"
        },        {
          question: "CROSS APPLY এবং OUTER APPLY এর মধ্যে পার্থক্য কী?",
          answer: "CROSS APPLY শুধু মিল থাকা রেকর্ড দেখায়, অন্যদিকে OUTER APPLY মিল না থাকলেও রেকর্ড দেখায়।",
          explanation: "-- CROSS APPLY SELECT e.name, d.department_name  FROM employees e CROSS APPLY (SELECT * FROM departments WHERE departments.id = e.department_id) d; -- OUTER APPLY SELECT e.name, d.department_name  FROM employees e OUTER APPLY (SELECT * FROM departments WHERE departments.id = e.department_id) d;"
        },        {
          question: "SELF JOIN এবং INNER JOIN এর মধ্যে পার্থক্য কী?",
          answer: "SELF JOIN হল একটি টেবিলের মধ্যে নিজের সাথে জয়েন করা, অন্যদিকে INNER JOIN দুটি ভিন্ন টেবিলের মধ্যে জয়েন করা।",
          explanation: "-- SELF JOIN SELECT e1.name AS employee, e2.name AS manager FROM employees e1 JOIN employees e2 ON e1.manager_id = e2.id; -- INNER JOIN SELECT employees.name, departments.department_name FROM employees INNER JOIN departments ON employees.department_id = departments.id;"
        },

      ]
    },
    {
      title: "AGGREGATE FUNCTIONS",
      questions: [
        {
          question: "COUNT() ফাংশনের কাজ কী?",
          answer: "COUNT() ফাংশন ব্যবহৃত হয় নির্দিষ্ট কলামের মোট রেকর্ডের সংখ্যা গণনা করার জন্য।",
          explanation: "SELECT COUNT(*) FROM employees; এই কমান্ডটি মোট কর্মচারীর সংখ্যা দেখাবে।"
        },
        {
          question: "SUM() ফাংশনের কাজ কী?",
          answer: "SUM() ফাংশন ব্যবহৃত হয় নির্দিষ্ট কলামের সব মানের যোগফল গণনা করার জন্য।",
          explanation: "SELECT SUM(salary) FROM employees; এই কমান্ডটি সব কর্মচারীর বেতনের যোগফল দেখাবে।"
        },
        {
          question: "AVG() ফাংশনের কাজ কী?",
          answer: "AVG() ফাংশন ব্যবহৃত হয় নির্দিষ্ট কলামের মানের গড় গণনা করার জন্য।",
          explanation: "SELECT AVG(salary) FROM employees; এই কমান্ডটি সব কর্মচারীর গড় বেতন দেখাবে।"
        }
,
        {
          question: "MIN() ফাংশনের কাজ কী?",
          answer: "MIN() ফাংশন ব্যবহৃত হয় নির্দিষ্ট কলামের সবচেয়ে ছোট মান খুঁজে পাওয়ার জন্য।",
          explanation: "SELECT MIN(salary) FROM employees; এই কমান্ডটি সবচেয়ে কম বেতন দেখাবে।"
        }
,
        {
          question: "MAX() ফাংশনের কাজ কী?",
          answer: "MAX() ফাংশন ব্যবহৃত হয় নির্দিষ্ট কলামের সবচেয়ে বড় মান খুঁজে পাওয়ার জন্য।",
          explanation: "SELECT MAX(salary) FROM employees; এই কমান্ডটি সবচেয়ে বেশি বেতন দেখাবে।"
        },
        {
          question: "COUNT() ফাংশন কীভাবে NULL মান বাদ দেয়?",
          answer: "COUNT() ফাংশন শুধু নন-নাল মান গণনা করে।",
          explanation: "SELECT COUNT(name) FROM employees; এই কমান্ডটি শুধু নামের কলামে নন-নাল মান গণনা করবে।"
        },
        {
          question: "FIRST() এবং LAST() ফাংশনের কাজ কী?",
          answer: "FIRST() এবং LAST() ফাংশন ব্যবহৃত হয় নির্দিষ্ট কলামের প্রথম বা শেষ মান খুঁজে পাওয়ার জন্য।",
          explanation: "SELECT FIRST(salary) FROM employees; এবং SELECT LAST(salary) FROM employees;"
        },
        {
          question: "GROUP_CONCAT() ফাংশনের কাজ কী?",
          answer: "GROUP_CONCAT() ফাংশন ব্যবহৃত হয় গ্রুপ করা রেকর্ডের মানগুলোকে একটি স্ট্রিং হিসেবে সংযুক্ত করার জন্য।",
          explanation: "SELECT department_id, GROUP_CONCAT(name) FROM employees GROUP BY department_id;"
        },
        {
          question: "GROUPING() ফাংশনের কাজ কী?",
          answer: "GROUPING() ফাংশন ব্যবহৃত হয় ROLLUP বা CUBE এর সাথে কোনো গ্রুপিং করা হয়েছে কিনা তা চেক করার জন্য।",
          explanation: "SELECT department_id, job_title, SUM(salary), GROUPING(department_id) FROM employees GROUP BY department_id, job_title WITH ROLLUP;"
        },
        {
          question: "NTILE() ফাংশনের কাজ কী?",
          answer: "NTILE() ফাংশন ব্যবহৃত হয় ডেটাকে নির্দিষ্ট সংখ্যক গ্রুপে বিভক্ত করার জন্য।",
          explanation: "SELECT name, salary, NTILE(4) OVER (ORDER BY salary DESC) AS quartile FROM employees;"
        },
        {
          question: "PERCENT_RANK() ফাংশনের কাজ কী?",
          answer: "PERCENT_RANK() ফাংশন ব্যবহৃত হয় ডেটার পারসেন্টাইল র‍্যাঙ্ক গণনা করার জন্য।",
          explanation: "SELECT name, salary, PERCENT_RANK() OVER (ORDER BY salary DESC) AS percentile_rank FROM employees;"
        },
        
        {
          question: "STRING_AGG() ফাংশনের কাজ কী?",
          answer: "STRING_AGG() ফাংশন ব্যবহৃত হয় স্ট্রিং ভ্যালুগুলোকে একটি স্ট্রিং হিসেবে সংযুক্ত করার জন্য।",
          explanation: "SELECT department_id, STRING_AGG(name, ', ') AS employee_names FROM employees GROUP BY department_id;"
        },
        {
          question: "PERCENTILE_CONT() এবং PERCENTILE_DISC() এর মধ্যে পার্থক্য কী?",
          answer: "PERCENTILE_CONT() ইন্টারপোলেটেড মান দেয়, অন্যদিকে PERCENTILE_DISC() ডিসক্রিট মান দেয়।",
          explanation: "-- PERCENTILE_CONT SELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) OVER () AS median_salary FROM employees; -- PERCENTILE_DISC SELECT PERCENTILE_DISC(0.5) WITHIN GROUP (ORDER BY salary) OVER () AS median_salary FROM employees;"
        }



      ]
    },
    {
      title: "GROUP BY ও HAVING",
      questions: [
        {
          question: "GROUP BY ক্লজের কাজ কী?",
          answer: "GROUP BY ক্লজ ব্যবহৃত হয় ডেটাকে নির্দিষ্ট কলামের উপর ভিত্তি করে গ্রুপ করার জন্য।",
          explanation: "SELECT department_id, COUNT(*) FROM employees GROUP BY department_id;"
        },
        {
          question: "HAVING ক্লজের কাজ কী?",
          answer: "HAVING ক্লজ ব্যবহৃত হয় GROUP BY এর পর ফিল্টার করার জন্য।",
          explanation: "SELECT department_id, COUNT(*) FROM employees GROUP BY department_id HAVING COUNT(*) > 5;"
        },
        {
          question: "GROUP BY ক্লজে একাধিক কলাম কীভাবে ব্যবহার করা যায়?",
          answer: "কমা দিয়ে কলামগুলো আলাদা করে।",
          explanation: "SELECT department_id, job_title, COUNT(*) FROM employees GROUP BY department_id, job_title;"
        },
        {
          question: "HAVING ক্লজে কীভাবে একাধিক শর্ত ব্যবহার করা যায়?",
          answer: "AND বা OR অপারেটর ব্যবহার করে।",
          explanation: "SELECT department_id, COUNT(*) FROM employees GROUP BY department_id HAVING COUNT(*) > 5 AND SUM(salary) > 50000;"
        },
        {
          question: "GROUP BY ক্লজে ROLLUP এর কাজ কী?",
          answer: "ROLLUP ব্যবহৃত হয় সাবটোটাল এবং গ্র্যান্ড টোটাল গণনা করার জন্য।",
          explanation: "SELECT department_id, job_title, SUM(salary) FROM employees GROUP BY department_id, job_title WITH ROLLUP;"
        },
        {
          question: "HAVING ক্লজ ছাড়া GROUP BY ক্লজ কীভাবে কাজ করে?",
          answer: "GROUP BY ক্লজ শুধু গ্রুপ করে, কিন্তু HAVING ক্লজ ফিল্টার করে।",
          explanation: "SELECT department_id, COUNT(*) FROM employees GROUP BY department_id;"
        },
        {
          question: "CUBE এর কাজ কী?",
          answer: "CUBE ব্যবহৃত হয় সব সম্ভাব্য সাবটোটাল এবং গ্র্যান্ড টোটাল গণনা করার জন্য।",
          explanation: "SELECT department_id, job_title, SUM(salary) FROM employees GROUP BY department_id, job_title WITH CUBE;"
        },
        {
          question: "HAVING ক্লজ ছাড়া কীভাবে ফিল্টার করা যায়?",
          answer: "WHERE ক্লজ ব্যবহার করে।",
          explanation: "SELECT department_id, COUNT(*) FROM employees WHERE salary > 5000 GROUP BY department_id;"
        },
        {
          question: "GROUPING SETS এর কাজ কী?",
          answer: "GROUPING SETS ব্যবহৃত হয় বিভিন্ন গ্রুপিং সেট একসাথে কম্বাইন করার জন্য।",
          explanation: "SELECT department_id, job_title, SUM(salary) FROM employees GROUP BY GROUPING SETS ((department_id), (job_title), ());"
        },
        {
          question: "HAVING ক্লজে COUNT() ফাংশন কীভাবে ব্যবহার করা যায়?",
          answer: "HAVING ক্লজে COUNT() ব্যবহার করে গ্রুপের মোট রেকর্ড সংখ্যা চেক করা যায়।",
          explanation: "SELECT department_id, COUNT(*) AS total_employees FROM employees GROUP BY department_id HAVING COUNT(*) > 5;"
        }
      ]
    },
    {
      title: "SUBQUERY",
      questions: [
        {
          question: "SUBQUERY কী?",
          answer: "SUBQUERY হল একটি ক্যোয়ারিকে অন্য ক্যোয়ারির ভিতরে ব্যবহার করা।",
          explanation: "SELECT name FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);"
        },
        {
          question: " SUBQUERY কীভাবে EXISTS দিয়ে ব্যবহার করা যায়?",
          answer: "EXISTS ব্যবহৃত হয় যদি সাবক্যোয়ারি কোনো ফলাফল প্রদান করে।",
          explanation: "SELECT name FROM employees WHERE EXISTS (SELECT 1 FROM departments WHERE employees.department_id = departments.id);"
        },
        {
          question: "IN অপারেটর দিয়ে SUBQUERY কীভাবে ব্যবহার করা যায়?",
          answer: "IN ব্যবহৃত হয় যদি মান সাবক্যোয়ারির ফলাফলের মধ্যে থাকে।",
          explanation: "SELECT name FROM employees WHERE department_id IN (SELECT id FROM departments WHERE location = 'New York');"
        },
        {
          question: "CORRELATED SUBQUERY কী?",
          answer: "CORRELATED SUBQUERY হল একটি সাবক্যোয়ারি যা বাইরের ক্যোয়ারির প্রতিটি রেকর্ডের জন্য এক্সিকিউট হয়।",
          explanation: "SELECT name FROM employees e WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);"
        },
        {
          question: "SCALAR SUBQUERY কী?",
          answer: "SCALAR SUBQUERY হল একটি সাবক্যোয়ারি যা শুধু একটি মান প্রদান করে।",
          explanation: "SELECT name, (SELECT COUNT(*) FROM departments) AS total_departments FROM employees;"
        },
        {
          question: "EXISTS এবং IN এর মধ্যে পার্থক্য কী?",
          answer: "EXISTS রেকর্ডের অস্তিত্ব চেক করে, অন্যদিকে IN মানের মিল চেক করে।",
          explanation: "-- EXISTS SELECT name FROM employees e WHERE EXISTS (SELECT 1 FROM departments d WHERE d.id = e.department_id); -- IN SELECT name FROM employees WHERE department_id IN (SELECT id FROM departments);"
        },
        {
          question: "ANY এবং ALL অপারেটরের কাজ কী?",
          answer: "ANY যেকোনো একটি মানের সাথে মিল চেক করে, অন্যদিকে ALL সব মানের সাথে মিল চেক করে।",
          explanation: "-- ANY SELECT name FROM employees WHERE salary > ANY (SELECT salary FROM managers); -- ALL SELECT name FROM employees WHERE salary > ALL (SELECT salary FROM managers);"
        },
        {
          question: "SCALAR SUBQUERY এবং TABLE SUBQUERY এর মধ্যে পার্থক্য কী?",
          answer: "SCALAR SUBQUERY একটি মান রিটার্ন করে, অন্যদিকে TABLE SUBQUERY একটি টেবিল রিটার্ন করে।",
          explanation: "-- SCALAR SUBQUERY SELECT name, (SELECT COUNT(*) FROM departments) AS total_departments FROM employees;-- TABLE SUBQUERY SELECT * FROM (SELECT * FROM employees WHERE salary > 5000) AS high_salary_employees;"
        },
        {
          question: "EXISTS এবং NOT EXISTS এর মধ্যে পার্থক্য কী?",
          answer: "EXISTS রেকর্ডের অস্তিত্ব চেক করে, অন্যদিকে NOT EXISTS রেকর্ডের অনুপস্থিতি চেক করে।",
          explanation: "-- EXISTS SELECT name FROM employees e WHERE EXISTS (SELECT 1 FROM departments d WHERE d.id = e.department_id); -- NOT EXISTS SELECT name FROM employees e WHERE NOT EXISTS (SELECT 1 FROM departments d WHERE d.id = e.department_id);"
        }
      ]
    },
    {
      title: "INDEX ও VIEW",
      questions: [
        {
          question: "INDEX কী?",
          answer: "INDEX হল ডাটাবেসে ডেটা খুঁজে পাওয়ার জন্য ব্যবহৃত একটি ডাটা স্ট্রাকচার।",
          explanation: "CREATE INDEX idx_name ON employees(name);"
        },
        {
          question: "VIEW কী?",
          answer: "VIEW হল একটি ভার্চুয়াল টেবিল যা একটি ক্যোয়ারির ফলাফল থেকে তৈরি হয়।",
          explanation: "CREATE VIEW high_salary_employees AS SELECT * FROM employees WHERE salary > 5000;"
        },
        {
          question: "UNIQUE INDEX কী?",
          answer: "UNIQUE INDEX ব্যবহৃত হয় কলামের মানগুলো অনন্য করার জন্য।",
          explanation: "CREATE UNIQUE INDEX idx_unique_name ON employees(name);"
        },
        {
          question: "VIEW কীভাবে আপডেট করা যায়?",
          answer: "VIEW আপডেট করা যায় না, তবে আন্ডারলাইং টেবিল আপডেট করলে VIEW এর ফলাফল পরিবর্তিত হয়।",
          explanation: "UPDATE employees SET salary = 6000 WHERE id = 1; এই কমান্ডটি VIEW এর ফলাফল পরিবর্তন করবে।"
        },
        {
          question: "CLUSTERED INDEX এবং NON-CLUSTERED INDEX এর মধ্যে পার্থক্য কী?",
          answer: "CLUSTERED INDEX ডেটাকে ফিজিক্যালি সর্ট করে, অন্যদিকে NON-CLUSTERED INDEX লজিক্যাল পয়েন্টার তৈরি করে।",
          explanation: "CREATE CLUSTERED INDEX idx_clustered ON employees(id);"
        },
        {
          question: "MATERIALIZED VIEW কী?",
          answer: "MATERIALIZED VIEW হল একটি ভার্চুয়াল টেবিল যা ডেটা স্টোর করে এবং পরে ব্যবহার করা হয়।",
          explanation: "CREATE MATERIALIZED VIEW mv_employees AS SELECT * FROM employees WHERE salary > 5000;"
        },
        {
          question: "BITMAP INDEX কী?",
          answer: "BITMAP INDEX ব্যবহৃত হয় লো কার্ডিনালিটি ডেটার জন্য ইনডেক্স তৈরি করার জন্য।",
          explanation: "CREATE BITMAP INDEX idx_gender ON employees(gender);"
        },
        {
          question: "FORCE INDEX কীভাবে কাজ করে?",
          answer: "FORCE INDEX ব্যবহৃত হয় কোয়েরি অপ্টিমাইজারকে নির্দিষ্ট ইনডেক্স ব্যবহার করার জন্য বাধ্য করার জন্য।",
          explanation: "SELECT * FROM employees FORCE INDEX (idx_name) WHERE name = 'John';"
        },
        {
          question: "COVERING INDEX কী?",
          answer: "COVERING INDEX হল একটি ইনডেক্স যা কোয়েরির সব কলামকে কভার করে।",
          explanation: "CREATE INDEX idx_covering ON employees(name, salary);"
        },
        {
          question: "VIEW কীভাবে ইনডেক্স করা যায়?",
          answer: "VIEW কে ইনডেক্স করা যায় না, তবে MATERIALIZED VIEW ইনডেক্স করা যায়।",
          explanation: "CREATE MATERIALIZED VIEW mv_employees AS SELECT * FROM employees WHERE salary > 5000; CREATE INDEX idx_mv_salary ON mv_employees(salary);"
        }
      ]
    },
    {
      title: "CONSTRAINTS",
      questions: [
        {
          question: "PRIMARY KEY কী?",
          answer: "PRIMARY KEY হল একটি কলাম বা কলামের সমষ্টি যা টেবিলের প্রতিটি রেকর্ডকে অনন্যভাবে চিহ্নিত করে।",
          explanation: "CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(100));"
        },
        {
          question: "FOREIGN KEY কী?",
          answer: "FOREIGN KEY হল একটি কলাম যা অন্য টেবিলের PRIMARY KEY-এর সাথে সম্পর্কযুক্ত।",
          explanation: "CREATE TABLE orders (order_id INT PRIMARY KEY, employee_id INT, FOREIGN KEY (employee_id) REFERENCES employees(id));"
        },
        {
          question: "NOT NULL কনস্ট্রেন্টের কাজ কী?",
          answer: "NOT NULL কনস্ট্রেন্ট ব্যবহৃত হয় কলামে নাল মান ঢুকতে বাধা দেওয়ার জন্য।",
          explanation: "CREATE TABLE employees (id INT PRIMARY KEY, name VARCHAR(100) NOT NULL);"
        },
        {
          question: "CHECK কনস্ট্রেন্টের কাজ কী?",
          answer: "CHECK কনস্ট্রেন্ট ব্যবহৃত হয় কলামের মান নির্দিষ্ট শর্ত পূরণ করতে বাধ্য করার জন্য।",
          explanation: "CREATE TABLE employees (id INT PRIMARY KEY, age INT CHECK (age >= 18));"
        },
        {
          question: " UNIQUE কনস্ট্রেন্টের কাজ কী?",
          answer: " UNIQUE কনস্ট্রেন্ট ব্যবহৃত হয় কলামের মানগুলো অনন্য করার জন্য।",
          explanation: "CREATE TABLE employees (id INT PRIMARY KEY, email VARCHAR(100) UNIQUE);"
        },
        {
          question: "PRIMARY KEY এবং UNIQUE কনস্ট্রেন্টের মধ্যে পার্থক্য কী?",
          answer: "PRIMARY KEY একটি টেবিলে শুধু একটি থাকতে পারে, অন্যদিকে UNIQUE কনস্ট্রেন্ট একাধিক থাকতে পারে।",
          explanation: "CREATE TABLE employees (id INT PRIMARY KEY, email VARCHAR(100) UNIQUE);"
        },
        {
          question: "DEFERRABLE CONSTRAINT কী?",
          answer: "DEFERRABLE CONSTRAINT ব্যবহৃত হয় ট্রানজেকশনের শেষে কনস্ট্রেন্ট চেক করার জন্য।",
          explanation: "ALTER TABLE employees ADD CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) DEFERRABLE INITIALLY DEFERRED;"
        },
        {
          question: "CASCADE কনস্ট্রেন্টের কাজ কী?",
          answer: "CASCADE ব্যবহৃত হয় প্যারেন্ট টেবিলের রেকর্ড আপডেট বা ডিলিট করার সময় চাইল্ড টেবিলের সংশ্লিষ্ট রেকর্ড আপডেট বা ডিলিট করার জন্য।",
          explanation: "ALTER TABLE orders ADD CONSTRAINT fk_employee FOREIGN KEY (employee_id) REFERENCES employees(id) ON UPDATE CASCADE;"
        }
      ]
    },
    {
      title: "ADVANCED SQL",
      questions: [
        {
          question: "WINDOW FUNCTION কী?",
          answer: "WINDOW FUNCTION হল একটি ফাংশন যা একটি সেট অফ রেকর্ডের উপর কাজ করে কিন্তু সেট অফ রেকর্ড গ্রুপ করে না।",
          explanation: "SELECT name, salary, RANK() OVER (ORDER BY salary DESC) FROM employees;"
        },
        {
          question: "RECURSIVE CTE এর কাজ কী?",
          answer: "RECURSIVE CTE ব্যবহৃত হয় হায়ারার্কিকাল ডেটা প্রসেস করার জন্য।",
          explanation: "WITH RECURSIVE cte_hierarchy AS (SELECT id, manager_id FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.manager_id FROM employees e INNER JOIN cte_hierarchy ch ON e.manager_id = ch.id) SELECT * FROM cte_hierarchy;"
        },
        {
          question: "WINDOW FUNCTION এর PARTITION BY ক্লজের কাজ কী?",
          answer: "PARTITION BY ক্লজ ব্যবহৃত হয় ডেটাকে গ্রুপ করার জন্য, তবে গ্রুপ করার পর রেকর্ড অর্ডার করে না।",
          explanation: "SELECT name, salary, RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) FROM employees;"
        },
        {
          question: "PIVOT এবং UNPIVOT এর কাজ কী?",
          answer: "PIVOT ডেটাকে রো থেকে কলামে রূপান্তর করে, অন্যদিকে UNPIVOT কলামকে রোতে রূপান্তর করে।",
          explanation: "SELECT * FROM employees PIVOT (SUM(salary) FOR department_id IN (1, 2, 3));"
        },
        {
          question: "LAG() এবং LEAD() ফাংশনের কাজ কী?",
          answer: "LAG() পূর্ববর্তী রেকর্ডের মান দেখায়, অন্যদিকে LEAD() পরবর্তী রেকর্ডের মান দেখায়।",
          explanation: "SELECT name, salary, LAG(salary) OVER (ORDER BY salary DESC) AS previous_salary, LEAD(salary) OVER (ORDER BY salary DESC) AS next_salary FROM employees;"
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