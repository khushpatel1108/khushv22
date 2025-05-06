export const TOP_LEVEL_DOMAIN = '.me'

export const TECH_I_HAVE_BEEN_WORKING_WITH = ['React', 'Angular', 'TypeScript', 'Node.js', 'GraphQL', 'AWS']

export const EXPERIENCES = [
    {
        title: "Software Engineer",
        company: "Odoo",
        duration: "Jan 2025 - Present",
        description: [
            "Refactored frontend architecture for better scalability and collaboration across Parts Library project, designed and built quoting features.",
            "Automated backend quote handling through AWS Lambda, improving system response and reducing manual tasks.",
            "Resolved high-impact bugs in ECO orders, quoting workflows, and admin transitions (OBO mode)",
            "Improved code coverage and stability by writing comprehensive Jest test suites."

        ]
    },
    {
        title: "Frontend Engineer",
        company: "Fulcrum",
        duration: "Jun 2024 - Dec 2024",
        description: [
            "Led the frontend performance optmization, reducing build time by 26%.",
            "Integrated Mapbox for service order address tracking, enhancing work order allocation.",
            "Developed the WX Module to streamline work order management and real-time task tracking.",
            "Conceptualized and implemented Type/Identifier/Action (TIA) routing pattern for efficient navigation.",
            "Integrated high-performance RESTful APIs using Angular HTTPClient for seamless communication."
        ]
    }

]

export const PROJECTS = [
    {
        title: 'petCare',
        description: 'Tech-forward pet care platform that allows pet owners to easily book appointments, manage pet profiles, and streamline pet care services with a user-friendly interface.',
        imageUrl: '/assets/Projects/petCare.png',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        githubUrl: 'https://github.com/KhushPatel28/petCare-V1',
        liveUrl: 'http://petcare.mohitjaiswal.me/',
    },
    {
        title: 'AWS CI/CD Pipeline',
        description: 'Deployed a Java application on AWS using a cloud-native approach, leveraging AWS services such as CloudFormation, CodeCommit, CodeBuild, CodeaDeploy, EC2, S3, Auto Scaling Group (ASG) and VPC for streamlined CI/CD pipeline.',
        imageUrl: '/assets/Projects/AWS Architecture Diagram.jpg',
        technologies: ['AWS'],
        githubUrl: 'https://github.com/MohitJaiswal28/AWS-CICD',
    },
    {
        title: 'Role-Based Access Control (RBAC) System',
        description: 'Built a scalable RBAC system following a MVC architecture. Developed RESTful APIs for managing users, roles, and permissions, integrated seamlessly with the frontend',
        imageUrl: '/assets/Projects/RBAC.png',
        technologies: ['Angular', 'Node.js', 'MongoDB'],
        githubUrl: 'https://github.com/MohitJaiswal28/rbac-backend',
        liveUrl: 'https://rbac-mohitjaiswal.netlify.app//',
    },
];