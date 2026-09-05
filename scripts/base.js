const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

const today = document.querySelector("#currentYear");
if (today) today.textContent = new Date().getFullYear();

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

createCourseCards(courses);
const homeLink = document.querySelector(".all");
const oldLink = document.querySelector(".cse");
const newLink = document.querySelector(".wdd");

function createCourseCards(filteredCourses){
    document.querySelector(".build").innerHTML="";
    filteredCourses.forEach(course => {
        let card = document.createElement("section");
        let subject = document.createElement("h3");
        let number = document.createElement("p");

        subject.innerHTML = course.subject; 
        number.innerHTML = course.number;

        
    

        card.appendChild(subject);
        card.appendChild(number);
        card.setAttribute("class", "blocks");
        

        document.querySelector(".build").appendChild(card);
        
    });
    
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

    let creditContainer = document.getElementById("credit-display");
    
    // If the element doesn't exist in your HTML yet, create it dynamically
    if (!creditContainer) {
        creditContainer = document.createElement("h3");
        creditContainer.id = "credit-display";
        document.querySelector(".build").after(creditContainer);
    }

    creditContainer.innerHTML = `Total Credits: ${totalCredits}`;
}

homeLink.addEventListener("click", () => {
  createCourseCards(courses);
});
const searchTerm = "cse";
const searchWord = "wdd";

oldLink.addEventListener("click", ()=>{
    const cseCourses=courses.filter(course => 
  course.subject.toLowerCase().startsWith(searchTerm.toLowerCase())
);
createCourseCards(cseCourses);
});

newLink.addEventListener("click", ()=>{
  const wddCourses = courses.filter(course => 
  course.subject.toLowerCase().startsWith(searchWord.toLowerCase())
);  
createCourseCards(wddCourses);
});

document.getElementById("lastModified").innerHTML ="Last modified:" + document.lastModified;
navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});