document.addEventListener('DOMContentLoaded', () => {

    const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL'; // REMEMBER TO REPLACE THIS!

    // --- COLLEGES --- //
    const colleges = {
        "Engineering": [
            "Indian Institute of Technology Madras (IITM), Chennai",
            "National Institute of Technology Tiruchirappalli (NIT Trichy)",
            "Vellore Institute of Technology (VIT), Vellore",
            "SRM Institute of Science and Technology, Chennai",
            "Anna University, Chennai",
            "PSG College of Technology, Coimbatore",
            "Coimbatore Institute of Technology, Coimbatore",
            "Thiagarajar College of Engineering, Madurai",
            "Loyola-ICAM College of Engineering and Technology, Chennai",
            "Government College of Technology, Coimbatore",
            "Kumaraguru College of Technology, Coimbatore",
            "Sri Ramakrishna Engineering College, Coimbatore",
            "Sri Sivasubramaniya Nadar College of Engineering, Kanchipuram",
            "Chennai Institute of Technology, Kanchipuram",
            "Thangavelu Engineering College (TEC), Kanchipuram",
            "Velammal College of Engineering and Technology, Madurai",
            "Kamaraj College of Engineering and Technology, Madurai"
        ],
        "Arts & Science": [
            "Loyola College, Chennai",
            "Madras Christian College (MCC), Chennai",
            "PSG College of Arts and Science, Coimbatore",
            "Presidency College, Chennai",
            "St. Joseph's College, Tiruchirappalli",
            "Pachaiyappa's College for Men, Chennai",
            "Fatima College (Autonomous), Madurai",
            "Yadava College, Madurai"
        ],
        "Women's Colleges": [
            "Stella Maris College, Chennai",
            "Women's Christian College (WCC), Chennai",
            "Ethiraj College for Women, Chennai",
            "PSGR Krishnammal College for Women, Coimbatore"
        ],
        "Polytechnic": [
            "Murugappa Polytechnic College, Chennai",
            "Thiagarajar Polytechnic College, Salem",
            "P.A.C. Ramasamy Raja Polytechnic College, Rajapalayam",
            "Government Polytechnic College, Coimbatore"
        ]
    };
    const collegeSelect = $('#college-select');
    for (const category in colleges) {
        const optgroup = $(`<optgroup label="${category}"></optgroup>`);
        colleges[category].forEach(college => {
            optgroup.append(new Option(college, college));
        });
        collegeSelect.append(optgroup);
    }
    collegeSelect.select2({
        placeholder: "Select your college",
        allowClear: true
    });

    // --- SKILLS --- //
    const skills = {
        'Network Security': ['VLANs', 'OSPF', 'ACLs', 'VPN', 'IDS/IPS', 'Wireshark', 'Nmap'],
        'Penetration Testing': ['Metasploit', 'Burp Suite', 'Gobuster', 'Nikto'],
        'Cloud Security': ['AWS EC2', 'S3', 'IAM', 'VPC'],
        'Programming & OS': ['Python', 'Bash', 'Kali Linux', 'Ubuntu Server', 'Windows Security'],
        'Tools': ['iptables', 'Cisco ASA', 'pfSense', 'Packet Tracer', 'GNS3', 'Git', 'VS Code']
    };
    const skillsContainer = document.querySelector('.skills-container');
    for (const category in skills) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('skill-category');
        let skillsHTML = `<h3>${category}</h3><div class="skills-list">`;
        skills[category].forEach(skill => {
            skillsHTML += `<span class="skill-item">${skill}</span>`;
        });
        skillsHTML += `</div>`;
        categoryDiv.innerHTML = skillsHTML;
        skillsContainer.appendChild(categoryDiv);
    }

    // --- PROJECTS --- //
    const projects = [
        { title: 'Online Examination System', category: 'PHP', tech: 'PHP, MySQL', description: 'A web-based platform for conducting online exams, automating question paper generation, and providing instant results to students.' },
        { title: 'School Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'A comprehensive system to manage school operations, including student records, attendance, fees, and staff details.' },
        { title: 'Online Attendance System', category: 'PHP', tech: 'PHP, MySQL', description: 'A digital solution for tracking student or employee attendance with real-time reporting and analytics.' },
        { title: 'Online Admission System', category: 'PHP', tech: 'PHP, MySQL', description: 'Streamlines the admission process for educational institutions, allowing online form submissions and applicant tracking.' },
        { title: 'Tours and Travels Project', category: 'PHP', tech: 'PHP, MySQL', description: 'A booking platform for travel agencies to manage tours, packages, and customer reservations.' },
        { title: 'Student Result Management', category: 'PHP', tech: 'PHP, MySQL', description: 'Automates the process of recording, calculating, and publishing student academic results.' },
        { title: 'Online Jewellery Shopping', category: 'PHP', tech: 'PHP, MySQL', description: 'An e-commerce platform for jewellery stores to showcase and sell products online.' },
        { title: 'Online Shopping Project', category: 'PHP', tech: 'PHP, MySQL', description: 'A full-fledged e-commerce website with product listings, cart functionality, and payment integration.' },
        { title: 'Online Art Gallery', category: 'PHP', tech: 'PHP, MySQL', description: 'A virtual gallery for artists to display and sell their artwork online.' },
        { title: 'Online Matrimonial Website', category: 'PHP', tech: 'PHP, MySQL', description: 'A matchmaking platform for users to create profiles and search for potential life partners.' },
        { title: 'Online Book Store', category: 'PHP', tech: 'PHP, MySQL', description: 'An e-commerce site for buying and selling books with user accounts and order management.' },
        { title: 'Blood Bank Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'A system to manage blood donor records, inventory, and requests for blood transfusions.' },
        { title: 'Car Rental System', category: 'PHP', tech: 'PHP, MySQL', description: 'A platform for renting cars online, with booking, payment, and fleet management features.' },
        { title: 'Online Food Ordering System', category: 'PHP', tech: 'PHP, MySQL', description: 'A food delivery system where customers can order meals from restaurants and track deliveries.' },
        { title: 'Hostel Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Manages hostel accommodations, room allocations, and fee payments for students.' },
        { title: 'Online Voting System', category: 'PHP', tech: 'PHP, MySQL', description: 'A secure digital voting platform for elections, ensuring transparency and efficiency.' },
        { title: 'Gym Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Tracks gym memberships, attendance, and workout schedules for fitness centers.' },
        { title: 'Leave Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Automates employee leave requests, approvals, and records for organizations.' },
        { title: 'Image Crop Project', category: 'PHP', tech: 'PHP, MySQL', description: 'A tool for uploading and cropping images dynamically on a web platform.' },
        { title: 'Image Editor Project', category: 'PHP', tech: 'PHP, MySQL', description: 'Provides basic image editing functionalities like resizing, filters, and annotations.' },
        { title: 'Online Hotel Booking', category: 'PHP', tech: 'PHP, MySQL', description: 'A reservation system for hotels, allowing users to book rooms and manage stays.' },
        { title: 'College Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Integrates all college operations, including academics, administration, and finance.' },
        { title: 'PHP Image Gallery', category: 'PHP', tech: 'PHP, MySQL', description: 'Displays images in an organized gallery format with user upload capabilities.' },
        { title: 'Online Notes Sharing Platform', category: 'PHP', tech: 'PHP, MySQL', description: 'A collaborative platform for students to upload, share, and access study notes.' },
        { title: 'Travel Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Manages travel itineraries, bookings, and expenses for businesses or individuals.' },
        { title: 'House Rental and Property Listing', category: 'PHP', tech: 'PHP, MySQL', description: 'A real estate platform for listing and renting properties with search and filtering options.' },
        { title: 'Electricity Bill Payment', category: 'PHP', tech: 'PHP, MySQL', description: 'Enables users to pay electricity bills online and view payment history.' },
        { title: 'Expense Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Tracks personal or organizational expenses with categorization and reporting.' },
        { title: 'Time Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Helps users or teams manage tasks, schedules, and deadlines efficiently.' },
        { title: 'PHP Online File Storage', category: 'PHP', tech: 'PHP, MySQL', description: 'A cloud-based file storage system for uploading, organizing, and sharing files.' },
        { title: 'Event Booking System', category: 'PHP', tech: 'PHP, MySQL', description: 'Allows users to book tickets for events and manage event details.' },
        { title: 'Online Doctor Appointment Booking', category: 'PHP', tech: 'PHP, MySQL', description: 'Facilitates booking doctor appointments online with slot availability and reminders.' },
        { title: 'Visitor Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Logs and tracks visitors in organizations with check-in/check-out functionality.' },
        { title: 'Online Chat Application', category: 'PHP', tech: 'PHP, MySQL', description: 'A real-time chat application for users to communicate via text messages.' },
        { title: 'PHP Casino Project', category: 'PHP', tech: 'PHP, MySQL', description: 'A virtual casino with games like Blackjack and Slots for entertainment.' },
        { title: 'Life Insurance Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Manages insurance policies, customer details, and claims processing.' },
        { title: 'Beauty Parlour Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Streamlines appointment scheduling, services, and billing for beauty parlors.' },
        { title: 'Vehicle Breakdown Assistance', category: 'PHP', tech: 'PHP Laravel, MySQL', description: 'Connects users with vehicle breakdown services for roadside assistance.' },
        { title: 'Online Time Table Generator', category: 'PHP', tech: 'PHP, MySQL', description: 'Automatically generates timetables for educational institutions.' },
        { title: 'Online Lawyer Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Manages lawyer profiles, appointments, and case details for law firms.' },
        { title: 'Student Project Allocation System', category: 'PHP', tech: 'PHP, MySQL', description: 'Allocates academic projects to students based on preferences and availability.' },
        { title: 'Gate Pass Management System', category: 'PHP', tech: 'PHP, MySQL', description: 'Issues and tracks gate passes for visitors or items in organizations.' },
        { title: 'Attendance Management System', category: 'Android', tech: 'Android, Java/Kotlin, Firebase/SQLite', description: 'Tracks student or employee attendance using mobile devices with real-time updates.' },
        { title: 'Women Safety App', category: 'Android', tech: 'Android, Java/Kotlin, GPS, SMS APIs', description: 'An emergency app with features like SOS alerts, location sharing, and safety tips.' },
        { title: 'Android Calculator App', category: 'Android', tech: 'Android, Java/Kotlin', description: 'A basic or scientific calculator app for performing arithmetic operations.' },
        { title: 'Age Calculator', category: 'Android', tech: 'Android, Java/Kotlin', description: 'Calculates a person\'s age based on their birthdate input.' },
        { title: 'Expense Tracker App', category: 'Android', tech: 'Android, Java/Kotlin, SQLite', description: 'Helps users track daily expenses with categorization and budget alerts.' },
        { title: 'Budget Manager App', category: 'Android', tech: 'Android, Java/Kotlin, SQLite', description: 'Manages personal or household budgets with spending analysis.' },
        { title: 'Android FTP Server', category: 'Android', tech: 'Android, Java/Kotlin', description: 'Turns an Android device into an FTP server for file transfers over a network.' },
        { title: 'Android Fitness App', category: 'Android', tech: 'Android, Java/Kotlin, Sensors', description: 'Tracks workouts, steps, and fitness goals with progress reports.' },
        { title: 'Pedometer Step Counter App', category: 'Android', tech: 'Android, Java/Kotlin, Step Sensors', description: 'Counts daily steps and calculates distance walked or calories burned.' },
        { title: 'Android Quiz App', category: 'Android', tech: 'Android, Java/Kotlin, SQLite', description: 'A quiz application with multiple-choice questions and score tracking.' },
        { title: 'Image Steganography', category: 'Android', tech: 'Android, Java/Kotlin', description: 'Hides secret messages within images for secure communication.' },
        { title: 'Kotlin Job Allocation', category: 'Android', tech: 'Android, Kotlin, Firebase', description: 'Assigns jobs or tasks to employees based on availability and skills.' },
        { title: 'Android Music Player', category: 'Android', tech: 'Android, Java/Kotlin', description: 'Plays audio files with playlists, equalizer, and background playback.' },
        { title: 'Android Location Alarm', category: 'Android', tech: 'Android, Java/Kotlin, GPS', description: 'Sets alarms triggered when the user reaches a specific location.' },
        { title: 'Android Book Listing App', category: 'Android', tech: 'Android, Java/Kotlin, SQLite/API', description: 'Lists books with details like title, author, and availability.' },
        { title: 'Student Marks Calculator', category: 'Android', tech: 'Android, Java/Kotlin', description: 'Calculates and displays student grades based on marks input.' },
        { title: 'Medicine Reminder App', category: 'Android', tech: 'Android, Java/Kotlin, Notifications', description: 'Sends reminders for medication schedules and refills.' },
        { title: 'Income Tax and EMI Calculator', category: 'Android', tech: 'Android, Java/Kotlin', description: 'Calculates income tax liabilities and loan EMIs based on user inputs.' },
        { title: 'Android GST Billing', category: 'Android', tech: 'Android, Java/Kotlin', description: 'Generates GST-compliant invoices for small businesses.' },
        { title: 'Covid-19 Counter Tracker', category: 'Android', tech: 'Android, Java/Kotlin, API', description: 'Tracks COVID-19 cases, recoveries, and deaths globally or locally.' },
        { title: 'Android Ludo Game', category: 'Android', tech: 'Android, Java/Kotlin', description: 'A digital version of the classic Ludo board game for multiplayer fun.' },
        { title: 'Android Tetris Game', category: 'Android', tech: 'Android, Java/Kotlin', description: 'A Tetris game with score tracking and level progression.' },
        { title: 'Android Text Encryption', category: 'Android', tech: 'Android, Java/Kotlin', description: 'Encrypts and decrypts text using algorithms like AES or RSA.' },
        { title: 'Android Text to Speech Converter', category: 'Android', tech: 'Android, Java/Kotlin, TTS Engine', description: 'Converts written text into spoken audio output.' },
        { title: 'Android Simple Math Quiz', category: 'Android', tech: 'Android, Java/Kotlin', description: 'A quiz app with basic math questions for practice or testing.' },
        { title: 'Android Bouncing Ball', category: 'Android', tech: 'Android, Java/Kotlin', description: 'A simple game where a ball bounces around the screen with physics.' },
        { title: 'Android Sudoku Game', category: 'Android', tech: 'Android, Java/Kotlin', description: 'A Sudoku puzzle game with multiple difficulty levels.' },
        { title: 'Airlines Reservation System', category: 'Java', tech: 'Java, MySQL', description: 'Manages flight bookings, seat allocations, and passenger details for airlines.' },
        { title: 'Banking System', category: 'Java', tech: 'Java, MySQL', description: 'Simulates banking operations like deposits, withdrawals, and account management.' },
        { title: 'Currency Converter', category: 'Java', tech: 'Java, API', description: 'Converts currencies based on real-time exchange rates fetched from an API.' },
        { title: 'Online Examination System', category: 'Java', tech: 'Java, JSP, Servlet, MySQL', description: 'A web-based exam platform with automated grading and result generation.' },
        { title: 'Restaurant Management System', category: 'Java', tech: 'Java, MySQL', description: 'Manages restaurant orders, tables, menus, and billing.' },
        { title: 'Bus Ticket Booking System', category: 'Java', tech: 'Java, JSP, MySQL', description: 'Allows users to book bus tickets online with seat selection.' },
        { title: 'Java Percentage Calculator', category: 'Java', tech: 'Java', description: 'Calculates percentages for academic or financial purposes.' },
        { title: 'Online Banking System', category: 'Java', tech: 'Java, MySQL', description: 'Provides online banking functionalities like fund transfers and balance checks.' },
        { title: 'Hospital Management System', category: 'Java', tech: 'Java, JSP, MySQL', description: 'Manages patient records, appointments, and hospital workflows.' },
        { title: 'Online Medicine Shop', category: 'Java', tech: 'Java, JSP, MySQL', description: 'An e-commerce site for purchasing medicines online with prescriptions.' },
        { title: 'Text File Encryption Decryption', category: 'Java', tech: 'Java', description: 'Encrypts and decrypts text files for secure storage or transmission.' },
        { title: 'Student Counselling System', category: 'Java', tech: 'Java, MySQL', description: 'Facilitates academic counselling sessions and records for students.' },
        { title: 'Payroll Management System', category: 'Java', tech: 'Java, Swing, MySQL', description: 'Automates salary calculations, deductions, and payroll processing.' },
        { title: 'Attendance Management System', category: 'Java', tech: 'Java, MySQL', description: 'Tracks employee or student attendance with reporting features.' },
        { title: 'Cryptography Project', category: 'Java', tech: 'Java', description: 'Implements cryptographic algorithms for secure data communication.' },
        { title: 'Movie Ticket Booking System', category: 'Java', tech: 'Java, MySQL', description: 'Books cinema tickets online with seat selection and payment options.' },
        { title: 'Inventory Management System', category: 'Java', tech: 'Java, MySQL', description: 'Tracks product stock levels, orders, and supplier details.' },
        { title: 'Internet Service Provider Project', category: 'Java', tech: 'Java, MySQL', description: 'Manages customer subscriptions, billing, and service requests for ISPs.' },
        { title: 'Online Food Order', category: 'Java', tech: 'Java, Spring Boot, Angular, MySQL', description: 'A full-stack food ordering system with admin and customer interfaces.' },
        { title: 'Online Book Store', category: 'Java', tech: 'Java, Spring Boot, MySQL', description: 'An e-commerce platform for buying and selling books online.' },
        { title: 'School Management System', category: 'Java', tech: 'Java, MySQL', description: 'Integrates school operations like admissions, academics, and finance.' },
        { title: 'Hotel Management System', category: 'Java', tech: 'Java, Swing, MySQL', description: 'Manages hotel bookings, rooms, and guest services with a GUI interface.' },
        { title: 'Contact Management System', category: 'Python', tech: 'Python, SQLite', description: 'Stores and manages contact details with search and update functionalities.' },
        { title: 'Ludo Game', category: 'Python', tech: 'Python, Pygame', description: 'A digital implementation of the classic Ludo board game.' },
        { title: 'Hotel Management System', category: 'Python', tech: 'Python, SQLite', description: 'Manages hotel bookings, check-ins, and billing.' },
        { title: 'Complaint Management System', category: 'Python', tech: 'Python, SQLite', description: 'Logs and tracks customer complaints with resolution status updates.' },
        { title: 'Pharmacy Management System', category: 'Python', tech: 'Python, SQLite', description: 'Tracks medicine inventory, sales, and prescriptions.' },
        { title: 'Bank Management System', category: 'Python', tech: 'Python, SQLite', description: 'Simulates banking operations like account management and transactions.' },
        { title: 'Movie Rental Shop Management', category: 'Python', tech: 'Python, SQLite', description: 'Manages movie rentals, returns, and customer records.' },
        { title: 'Student Management System', category: 'Python', tech: 'Python, SQLite', description: 'Tracks student details, attendance, and academic performance.' },
        { title: 'ATM Software', category: 'Python', tech: 'Python, SQLite', description: 'Simulates ATM functionalities like cash withdrawals and balance checks.' },
        { title: 'Hotel Management System GUI', category: 'Python', tech: 'Python, Tkinter, SQLite', description: 'A GUI-based system for managing hotel operations like bookings and billing.' },
        { title: 'Django Medical Shop Management', category: 'Python', tech: 'Python, Django, MySQL', description: 'Manages pharmacy inventory, sales, and customer prescriptions.' },
        { title: 'Online Job Portal', category: 'Python', tech: 'Python, Django, MySQL', description: 'Connects job seekers with employers through a web-based platform.' },
        { title: 'Covid-19 Hospital Management', category: 'Python', tech: 'Python, Django, MySQL', description: 'Manages patient records, beds, and medical staff during the pandemic.' },
        { title: 'GST Billing Project', category: 'Python', tech: 'Python, Django, MySQL', description: 'Generates GST-compliant invoices for businesses.' },
        { title: 'Online Banking System', category: 'Python', tech: 'Python, Django, MySQL', description: 'Provides online banking services like fund transfers and account management.' },
        { title: 'Online Book Store', category: 'Python', tech: 'Python, Django, MySQL', description: 'An e-commerce platform for buying and selling books online.' },
        { title: 'Weather Forecast Project', category: 'Python', tech: 'Python, Django, API', description: 'Displays weather forecasts using data from a weather API.' },
        { title: 'Django School Management System', category: 'Python', tech: 'Python, Django, MySQL', description: 'Manages school operations like admissions, attendance, and exams.' },
        { title: 'Food Recommender', category: 'Python', tech: 'Python, Django, Machine Learning', description: 'Suggests food items based on user mood inputs using ML algorithms.' },
        { title: 'Online Tiffin Service Management', category: 'Python', tech: 'Python, Django, MySQL', description: 'Manages subscriptions and deliveries for tiffin services.' },
        { title: 'Iris Flower Classification', category: 'Python', tech: 'Python, Flask, Machine Learning', description: 'Classifies iris flower species using a decision tree model.' },
        { title: 'User Management System', category: 'Python', tech: 'Python, Django, MySQL', description: 'Manages user registrations, profiles, and authentication.' },
        { title: 'Blog Website', category: 'Python', tech: 'Python, Django, MySQL', description: 'A blogging platform for users to create and publish posts.' },
        { title: 'Salary Prediction', category: 'Machine Learning', tech: 'Python, Flask, Scikit-learn', description: 'Predicts salaries based on factors like experience and education using regression models.' },
        { title: 'Sentiment Analysis', category: 'Machine Learning', tech: 'Python, Flask, NLP', description: 'Analyzes sentiment (positive/negative) from user-provided text or reviews.' },
        { title: 'IMDB Sentiment Analysis', category: 'Machine Learning', tech: 'Python, NLP, Scikit-learn', description: 'Classifies movie reviews from IMDB as positive or negative.' },
        { title: 'Black Friday Sales Prediction', category: 'Machine Learning', tech: 'Python, Scikit-learn, Pandas', description: 'Predicts sales volumes for retail products during Black Friday.' },
        { title: 'Medical Insurance Cost Prediction', category: 'Machine Learning', tech: 'Python, Flask, Scikit-learn', description: 'Estimates insurance premiums based on patient demographics and medical history.' },
        { title: 'Insurance Claim Prediction', category: 'Machine Learning', tech: 'Python, Scikit-learn', description: 'Predicts the likelihood of insurance claims being filed based on historical data.' },
        { title: 'Image to Cartoon', category: 'Machine Learning', tech: 'Python, OpenCV', description: 'Converts photographs into cartoon-style images using image processing.' },
        { title: 'AI Chess Game', category: 'Machine Learning', tech: 'Python, AI Algorithms', description: 'A chess game with an AI opponent capable of making strategic moves.' },
        { title: 'Handwritten Digits Recognition', category: 'Machine Learning', tech: 'Python, TensorFlow/Keras', description: 'Recognizes handwritten digits using a convolutional neural network (CNN).' },
        { title: 'Netflix Movie Recommendation', category: 'Machine Learning', tech: 'Python, Scikit-learn, Pandas', description: 'Recommends movies to users based on their viewing history and preferences.' },
        { title: 'Music Recommendation by Facial Expression', category: 'Machine Learning', tech: 'Python, OpenCV, Machine Learning', description: 'Suggests music tracks by analyzing the user\'s facial emotions.' },
        { title: 'Handwritten Digit Recognition App', category: 'Machine Learning', tech: 'Python, Flask, TensorFlow', description: 'A web app that recognizes and classifies handwritten digits.' },
        { title: 'Cat vs Dog Image Classification', category: 'Machine Learning', tech: 'Python, TensorFlow, CNN', description: 'Classifies images as cats or dogs using a deep learning model.' },
        { title: 'Age and Gender Detection', category: 'Machine Learning', tech: 'Python, Flask, OpenCV, Deep Learning', description: 'Detects a person\'s age and gender from their photo.' },
        { title: 'Vehicle Number Plate Detection', category: 'Machine Learning', tech: 'Python, OpenCV, Deep Learning', description: 'Identifies and extracts vehicle license plates from images.' },
        { title: 'Employee Attrition Prediction', category: 'Machine Learning', tech: 'Python, Scikit-learn', description: 'Predicts the likelihood of employees leaving a company.' },
        { title: 'Student Performance Prediction', category: 'Machine Learning', tech: 'Python, Scikit-learn', description: 'Forecasts student academic outcomes based on historical data.' },
        { title: 'Campus Recruitment Prediction', category: 'Machine Learning', tech: 'Python, Scikit-learn', description: 'Predicts job placement chances for students based on academic and demographic factors.' },
        { title: 'Road Accident Severity Prediction', category: 'Machine Learning', tech: 'Python, Scikit-learn', description: 'Predicts the severity of road accidents using factors like weather and road conditions.' },
        { title: 'Alzheimer’s Disease Prediction', category: 'Machine Learning', tech: 'Python, TensorFlow, Medical Data', description: 'Uses ML to detect early signs of Alzheimer’s from medical data.' },
        { title: 'Air Quality Index Prediction', category: 'Machine Learning', tech: 'Python, Scikit-learn', description: 'Forecasts air quality levels based on PM 2.5 and other pollutants.' },
        { title: 'Drug Recommendation System', category: 'Machine Learning', tech: 'Python, NLP, Scikit-learn', description: 'Recommends medications by analyzing patient reviews or symptoms.' },
        { title: 'Big Mart Sales Prediction', category: 'Machine Learning', tech: 'Python, Scikit-learn', description: 'Predicts sales for retail products to optimize inventory.' },
        { title: 'AI Image Colorization', category: 'Machine Learning', tech: 'Python, OpenCV, Deep Learning', description: 'Adds color to black-and-white photos using AI.' },
        { title: 'Phishing Website Detection', category: 'Machine Learning', tech: 'Python, Scikit-learn', description: 'Identifies phishing websites based on URL and content features.' },
        { title: 'E-commerce Customer Segmentation', category: 'Machine Learning', tech: 'Python, Flask, Scikit-learn', description: 'Segments customers into groups for targeted marketing.' },
        { title: 'AI Resume Analyzer', category: 'Machine Learning', tech: 'Python, NLP, RoBERTa', description: 'Analyzes resumes and matches them to job descriptions for suitability.' },
        { title: 'Text-to-Image Generator', category: 'Machine Learning', tech: 'Python, GANs, Deep Learning', description: 'Generates images from textual descriptions using generative AI models.' }
    ];
    const projectsContainer = document.querySelector('.project-cards');
    const showMoreBtn = document.querySelector('#show-more-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const remainingProjectsText = document.getElementById('remaining-projects-text');
    let itemsToShow = 6;
    let currentFilter = 'all';

    function updateRemainingProjectsText(filteredCount) {
        const remaining = filteredCount - itemsToShow;
        if (remaining > 0) {
            remainingProjectsText.textContent = `(${remaining} more projects)`;
        } else {
            remainingProjectsText.textContent = '';
        }
    }

    function renderProjects() {
        projectsContainer.innerHTML = '';
        const filteredProjects = projects.filter(project => currentFilter === 'all' || project.category === currentFilter);

        filteredProjects.slice(0, itemsToShow).forEach(project => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${project.title}</h3>
                <p class="category">${project.category}</p>
                <p>${project.description.substring(0, 100)}...</p>
                <button class="learn-more-btn">Learn More</button>
                <p><b>Price: &#8377;4500</b></p>
            `;
            card.querySelector('.learn-more-btn').addEventListener('click', () => openProjectModal(project));
            projectsContainer.appendChild(card);
        });

        showMoreBtn.style.display = itemsToShow >= filteredProjects.length ? 'none' : 'block';
        updateRemainingProjectsText(filteredProjects.length);
    }

    showMoreBtn.addEventListener('click', () => {
        itemsToShow += 6;
        renderProjects();
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            itemsToShow = 6;
            renderProjects();
        });
    });

    // --- PROJECT MODAL --- //
    const projectModal = document.getElementById('project-modal');
    const closeProjectModalBtn = projectModal.querySelector('.close-btn');

    function openProjectModal(project) {
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-category').textContent = project.category;
        document.getElementById('modal-tech').textContent = project.tech;
        document.getElementById('modal-description').textContent = project.description;
        projectModal.querySelector('.book-project-btn').onclick = () => openBookingModal(project.title);
        projectModal.style.display = 'block';
    }

    closeProjectModalBtn.addEventListener('click', () => projectModal.style.display = 'none');

    // --- BOOKING MODAL --- //
    const bookingModal = document.getElementById('booking-modal');
    const closeBookingModalBtn = bookingModal.querySelector('.close-btn');
    const bookingForm = document.getElementById('booking-form');
    const bookingMessage = document.getElementById('booking-message');
    const addCollegeBtn = document.getElementById('add-college-btn');

    function openBookingModal(projectTitle) {
        projectModal.style.display = 'none';
        document.getElementById('booking-project-title').value = projectTitle;
        bookingMessage.textContent = '';
        bookingForm.reset();
        collegeSelect.val(null).trigger('change');
        bookingModal.style.display = 'block';
    }

    closeBookingModalBtn.addEventListener('click', () => bookingModal.style.display = 'none');

    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const projectTitle = document.getElementById('booking-project-title').value;
        const college = document.getElementById('college-select').value;
        const department = e.target.department.value;
        const submitButton = e.target.querySelector('button[type="submit"]');

        submitButton.textContent = 'Checking...';
        submitButton.disabled = true;

        const checkUrl = `${GOOGLE_SCRIPT_URL}?action=check&ProjectTitle=${encodeURIComponent(projectTitle)}&College=${encodeURIComponent(college)}&Department=${encodeURIComponent(department)}`;
        
        try {
            const response = await fetch(checkUrl);
            const data = await response.json();

            if (data.exists) {
                bookingMessage.textContent = 'This project is already booked for your college and department.';
                bookingMessage.style.color = 'red';
            } else {
                bookingMessage.textContent = 'Booking...';
                bookingMessage.style.color = 'blue';
                const formData = new FormData(bookingForm);
                const saveResponse = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    body: formData
                });
                const result = await saveResponse.json();

                if (result.status === 'success') {
                    bookingMessage.textContent = 'Booking successful! You will be contacted shortly.';
                    bookingMessage.style.color = 'green';
                    bookingForm.reset();
                    collegeSelect.val(null).trigger('change');
                } else {
                    throw new Error('Booking failed to save.');
                }
            }
        } catch (error) {
            bookingMessage.textContent = 'An error occurred. Please check your connection and try again.';
            bookingMessage.style.color = 'red';
        } finally {
            submitButton.textContent = 'Confirm Booking';
            submitButton.disabled = false;
        }
    });

    // --- ADD COLLEGE MODAL --- //
    const addCollegeModal = document.getElementById('add-college-modal');
    const closeAddCollegeModalBtn = addCollegeModal.querySelector('.close-btn');
    const addCollegeForm = document.getElementById('add-college-form');
    const addCollegeMessage = document.getElementById('add-college-message');

    addCollegeBtn.addEventListener('click', () => {
        bookingModal.style.display = 'none';
        addCollegeMessage.textContent = '';
        addCollegeForm.reset();
        addCollegeModal.style.display = 'block';
    });

    closeAddCollegeModalBtn.addEventListener('click', () => addCollegeModal.style.display = 'none');

    addCollegeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const collegeName = document.getElementById('new-college-name').value;
        const submitButton = e.target.querySelector('button[type="submit"]');

        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        const addCollegeUrl = `${GOOGLE_SCRIPT_URL}?action=addCollege&collegeName=${encodeURIComponent(collegeName)}`;

        try {
            const response = await fetch(addCollegeUrl);
            const data = await response.json();

            if (data.status === 'success') {
                addCollegeMessage.textContent = 'Thank you for your suggestion!';
                addCollegeMessage.style.color = 'green';
                addCollegeForm.reset();
            } else {
                throw new Error('Failed to submit.');
            }
        } catch (error) {
            addCollegeMessage.textContent = 'An error occurred. Please try again.';
            addCollegeMessage.style.color = 'red';
        } finally {
            submitButton.textContent = 'Submit';
            submitButton.disabled = false;
        }
    });

    // --- GENERAL --- //
    window.addEventListener('click', (event) => {
        if (event.target == projectModal) {
            projectModal.style.display = 'none';
        }
        if (event.target == bookingModal) {
            bookingModal.style.display = 'none';
        }
        if (event.target == addCollegeModal) {
            addCollegeModal.style.display = 'none';
        }
    });

    // --- FADE-IN ANIMATION --- //
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    renderProjects();
});