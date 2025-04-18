const questionsData = {
  "2022": {
    "1": [
      {
        id: "22-1-1",
        question: "A distributed system is preferred when the task is: i)Data-intensive; ii)Computing-intensive",
        options: ["Only (i)", "Only (ii)", "Both (i) and (ii)", "Neither (i) nor (ii)"],
        answer: 2
      },
      {
        id: "22-1-2",
        question: "The 'Grid' in the distributed grid computing paradigm links together power plants of different kinds.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: "22-1-3",
        question: "Which one of the following is/are the advantage(s) of cloud computing?",
        options: ["Resource pooling", "It requires an always-on internet connection.", "Ubiquitous", "On-demand payment policy"],
        answer: [0, 2, 3]
      },
      {
        id: "22-1-4",
        question: "The distributed system ensures 'robustness' of performance.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-1-5",
        question: "What is(are) the characteristic(s) of using cluster computing?",
        options: ["Parallel programming", "Faster network than a typical LAN", "Low-latency communication protocols", "None of these"],
        answer: [0, 1, 2]
      },
      {
        id: "22-1-6",
        question: "Web access to commercial software is one of the SaaS (Software as a Service) characteristics in the cloud computing paradigm.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-1-7",
        question: "Example(s) of PaaS (Platform as a Service) tool(s) is(are):",
        options: ["Microsoft Powerpoint", "Microsoft Azure", "Google App Engine", "Google mail service"],
        answer: [1, 2]
      },
      {
        id: "22-1-8",
        question: "IaaS (Infrastructure as a Service) in cloud computing delivers (i) storage; (ii) servers.",
        options: ["Only (i)", "Only (ii)", "Both (i) and (ii)", "Neither (i) nor (ii)"],
        answer: 2
      },
      {
        id: "22-1-9",
        question: "IaaS (Infrastructure as a Service) is the best option where regulatory compliance makes the offshoring or outsourcing of data storage and processing difficult",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: "22-1-10",
        question: "What is/are the main requirement(s) of a Cloud Service Provider (CSP)?",
        options: ["Increase agility", "Increase cost", "Increase productivity", "Decrease cost"],
        answer: [0, 2]
      }
    ],
    "2": [
      {
        id: "22-2-1",
        question: "Example(s) of Public cloud is(are)",
        options: ["Eucalyptus", "Ubuntu Enterprise Cloud (UEC)", "Microsoft ECI data centre", "Amazon EC2"],
        answer: 3
      },
      {
        id: "22-2-2",
        question: "Which of the following is/are XML parser API(s)?",
        options: ["XaaS (Anything as a Model)", "SAX (Simple API to XML)", "CLI (Command Line Interface)", "DOM (Document Object Model)"],
        answer: [1, 3]
      },
      {
        id: "22-2-3",
        question: "The public cloud provides total visibility and control over data regarding security.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: "22-2-4",
        question: "In the case of on-site private cloud, organizations consider (i) network dependency; (ii) no risk from multi-tenancy.",
        options: ["Only (i)", "Only (ii)", "Both (i) and (ii)", "Neither (i) nor (ii)"],
        answer: 0
      },
      {
        id: "22-2-5",
        question: "is an XML language for processing XML.",
        options: ["Javascript", "ECMA script", "CSS", "XSLT"],
        answer: 3
      },
      {
        id: "22-2-6",
        question: "Cloud Manager is the public access point to the cloud where subscribers sign up for accounts.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-2-7",
        question: "generally stores the cloud subscriber's metadata like user credentials and OS images.",
        options: ["SLA (Service Level Agreement)", "Cloud Manager", "DOS (Data Object storage)", "MOS (Metadata Object storage)"],
        answer: 2
      },
      {
        id: "22-2-8",
        question: "Which of these is responsible for the operation of a collection of computers that are connected via high speed local area networks in the cloud computing paradigm?",
        options: ["Cloud Manager", "Computer Manager", "Cluster Manager", "None of these"],
        answer: 2
      },
      {
        id: "22-2-9",
        question: "Hypervisor is also known as",
        options: ["Cluster Manager", "Virtual Machine Handler", "Virtual Machine Manager", "Virtual Machine Monitor"],
        answer: 3
      },
      {
        id: "22-2-10",
        question: "The following problems are addressed through Web services:",
        options: ["Firewall", "Interoperability", "Storage", "Speed"],
        answer: [0, 1]
      }
    ],
    "3": [
      {
        id: "22-3-1",
        question: "Which of the following is/are properties of Web Service SLAs?",
        options: ["SLA automation is required for negotiation, provisioning, service delivery and monitoring.", "The QoS parameters are response time, SLA violation rate for reliability, availability and cost of service.", "UDDI (Universal Description Discovery and Integration) is used for resource allocation.", "The QoS parameters are related to security, privacy, trust, management, etc."],
        answer: [1, 2]
      },
      {
        id: "22-3-2",
        question: "A task takes time T in a uniprocessor system. In a parallel implementation, the task runs on P processors parallelly. The parallel efficiency is Eff, where 0<Eff<1. What is the time taken by each processor (M) in this implementation?",
        options: ["M=T", "M=T/(Eff×P)", "M=T/P", "M=(T×Eff)/P"],
        answer: 1
      },
      {
        id: "22-3-3",
        question: "Row-oriented storage is optimal for transaction processing applications.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-3-4",
        question: "Which of the following is/are the SLA requirement(s) for PaaS cloud delivery model?",
        options: ["Transparency", "Data Retention and Deletion", "Privacy", "Regulatory compliance"],
        answer: [0, 2, 3]
      },
      {
        id: "22-3-5",
        question: "In a cloud, total service uptime is 175 minutes and availability of the service is 0.85 . What is the service downtime?",
        options: ["55 minutes", "148.75 minutes", "26.25 minutes", "45 minutes"],
        answer: 2
      },
      {
        id: "22-3-6",
        question: "Which of the following database system/architecture follow(s) Quorum protocol for a large number of concurrent reads & writes?",
        options: ["BigTable", "Dynamo", "Datastore", "Google File System (GFS)"],
        answer: 1
      },
      {
        id: "22-3-7",
        question: "Match the components of OpenStack with their functions. | Table I | Table II | |---|---| | 1. Neutron | A. Block storage | | 2. Cinder | B. Identity | | 3. Keystone | C. Compute | | 4. Nova | D. Networking |",
        options: ["1->B, 2->D, 3->A, 4->C", "1->B, 2->A, 3->D, 4->C", "1->C, 2->B, 3->D, 4->A", "1->D, 2->A, 3->B, 4->C"],
        answer: 3
      },
      {
        id: "22-3-8",
        question: "Let D(t) and R(t) be the instantaneous demand and resources at time t respectively. If demand is exponential (D(t)=e^t), any fixed provisioning interval (tp) according to the current demands will fall linearly behind.",
        options: ["TRUE", "FALSE"],
        answer: 1
      },
      {
        id: "22-3-9",
        question: "Which of the following statement(s) regarding OpenStack storage is/are wrong?",
        options: ["Object storage is managed by Cinder", "Both ephemeral storage and block storage are accessible from within VM", "Block storage persists until VM is terminated", "Ephemeral storage is used to run operating system and/or scratch space"],
        answer: [0, 2]
      },
      {
        id: "22-3-10",
        question: "Statement 1: Multiple KPIs are aggregated to SLA. Statement 2: SLA contains SLO.",
        options: ["Both statement 1 and 2 are correct", "Statement 1 is correct and statement 2 is incorrect", "Statement 2 is correct and statement 1 is incorrect", "Both statement 1 and 2 are incorrect"],
        answer: 2
      }
    ],
    "4": [
      {
        id: "22-4-1",
        question: "Azure app service plans define:",
        options: ["Instance size", "Security", "Region", "Scale count"],
        answer: [0, 2, 3]
      },
      {
        id: "22-4-2",
        question: "In Azure, app service supports local Git to deploy content to a web app.",
        options: ["TRUE", "FALSE"],
        answer: 0
      },
      {
        id: "22-4-3",
        question: "Which of the following statement(s) is/are FALSE for Microsoft Azure Resource Group?",
        options: ["It is a logical container", "It manages Azure resources", "It is a physical container", "It deploys web apps, databases, and storage accounts"],
        answer: 2
      },
      {
        id: "22-4-4",
        question: "Identify the correct statement(s) on Google App Engine.",
        options: ["It is a part of Google Cloud Platform (GCP) 'services' infrastructure", "It is a Platform as a Service (PaaS) component of GCP", "While using Google App Engine patching and maintenance would be checked continuously", "It is a part of Google Cloud Platform (GCP) 'compute' infrastructure"],
        answer: [1, 3]
      },
      {
        id: "22-4-5",
        question: "Google Cloud Datastore provides flexible object storage with global edge caching.",
        options: ["TRUE", "FALSE"],
        answer: 1
      },
      {
        id: "22-4-6",
        question: "Statement 1: In Microsoft Azure, a deployment user is required for FTP and local Git deployment to a web app. Statement 2: When deploying the Azure app remotely, the login password of the Azure account needs to be entered when the system asks for password.",
        options: ["Statement 1 is True and Statement 2 is False", "Statement 1 is False and Statement 2 is True", "Both are True", "Both are False"],
        answer: 0
      },
      {
        id: "22-4-7",
        question: "Match the following columns: | Column I | Column II | |---|---| | A. GoogleAppEngine | 1. Integrates Google's services into end users' application | | B. GoogleCloudEndpoints | 2. Helps end users' application scalability | | C. GoogleAPI | 3. Helps to migrate web application to Google Cloud Platform |",
        options: ["A-1, B-2, C-3", "A-3, B-2, C-1", "A-3, B-1, C-2", "A-2, B-1, C-3"],
        answer: 1
      },
      {
        id: "22-4-8",
        question: "While developing a web-app using Google App Engine, the development server should not be kept running when changes are made to the source file.",
        options: ["TRUE", "FALSE"],
        answer: 1
      },
      {
        id: "22-4-9",
        question: "Identify the correct statement(s) on OpenStack storage concepts:",
        options: ["Ephemeral storage is managed by Nova", "Block storage is accessible from within VM as a local file system", "Both Block storage and Object storage persist until specifically deleted by the user.", "Object storage is used to add additional persistent storage to VM and/or run operating system."],
        answer: [0, 2]
      },
      {
        id: "22-4-10",
        question: "Which of the following is/are storage service(s) provided by Google Cloud Platform(GCP)?",
        options: ["BigQuery", "Cloud SQL", "Cloud Datastore", "Cloud Endpoints"],
        answer: [1, 2]
      }
    ],
    "5": [
      {
        id: "22-5-1",
        question: "is a formal contract between a Service Provider (SP) and a Service Consumer (SC).",
        options: ["SLA", "KPI", "SLO", "Utility Premium"],
        answer: 0
      },
      {
        id: "22-5-2",
        question: "If demand is exponential (D(t)=e^t), any fixed provisioning interval (tp) according to the current demands will fall linearly behind.",
        options: ["TRUE", "FALSE"],
        answer: 1
      },
      {
        id: "22-5-3",
        question: "A third party application runs in the cloud for 18 hours/day. At the end of one month (30 days), it was found that the cloud suffered outages totalling 5 hours and T hours, on different days over the service period. The cloud guarantees service availability for 98% of the time. What are the value(s) of T among the given options such that the SLA negotiation does not get honored in terms of service availability?",
        options: [],
        answer: []
      },
      {
        id: "22-5-4",
        question: "Statement 1: In resource management, resource provisioning is the distribution of resources economically among competing groups of people or programs. Statement 2: Resource allocation is the prediction and calculation of future resource requirements.",
        options: ["Statement 1 is True and Statement 2 is False", "Statement 1 is False and Statement 2 is True", "Both statements are True", "Both statements are False"],
        answer: 0
      },
      {
        id: "22-5-5",
        question: "Which of the following is/are resource allocation approaches in resource management?",
        options: ["Intelligent multi-agent model", "Network queueing model", "Energy-aware resource allocation", "Reinforcement learning guided control policy"],
        answer: [0, 2]
      },
      {
        id: "22-5-6",
        question: "Consider that the peak computing demand for an organization is 250 units. The demand as a function of time can be expressed as D(t)=5t. Baseline (owned) unit cost is 120 and cloud unit cost is 150. The cloud is owned for a period of T time units. Select the values of T for which cloud is cheaper than owning.",
        options: ["50", "100", "150", "200"],
        answer: 0
      },
      {
        id: "22-5-7",
        question: "Which of the following is/are objective(s) of Resource Management?",
        options: ["Increased latency", "Scalability", "Improved throughput", "Improved security"],
        answer: [1, 2]
      },
      {
        id: "22-5-8",
        question: "In computing, there is a nonlinear relationship between the number of processing cores used and power consumption",
        options: ["TRUE", "FALSE"],
        answer: 0
      },
      {
        id: "22-5-9",
        question: "If demand is flat, the penalty will be linear.",
        options: ["TRUE", "FALSE"],
        answer: 1
      }
    ],
    "6": [
      {
        id: "22-6-1",
        question: "Interception is an attack on:",
        options: ["Integrity", "Availability", "Confidentiality", "Authenticity"],
        answer: 2
      },
      {
        id: "22-6-2",
        question: "Which of the following is/are the recovery goal(s) of the security mechanism?",
        options: ["Stop attack, assess and repair damage", "Detect attackers' violation of security policy", "Prevent attackers from violating security policy", "Continue to function correctly even if attack succeeds"],
        answer: [0, 3]
      },
      {
        id: "22-6-3",
        question: "Replay attack, which is the passive capture of a data unit and its subsequent retransmission to produce an unauthorized effect, is an active attack.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-6-4",
        question: "Statement I: Authorization is the identification of legitimate users. Statement II: Integrity is the protection against data alteration/corruption.",
        options: ["Statement I is TRUE and statement II is FALSE.", "Statement I is FALSE and statement II is TRUE.", "Both statements are TRUE.", "Both statements are FALSE."],
        answer: 1
      },
      {
        id: "22-6-5",
        question: "Which of the following is/are NOT passive attacks?",
        options: ["Masquerade", "Release of message contents", "Denial of service", "Modification"],
        answer: [0, 2, 3]
      },
      {
        id: "22-6-6",
        question: "In full virtualization, VMs interact with the host OS.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: "22-6-7",
        question: "When selecting the most suitable cloud provider satisfying customer's QoS requirements using a fuzzy inference engine, if the 'Degree of SLA Satisfaction' is greater than the 'Threshold for a cloud service provider', the customer should migrate to a different provider.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: "22-6-8",
        question: "Which of the following Open-source tools is/are used to perform TCP connect probes in Amazon EC2 platform?",
        options: ["wget", "nmap", "ifconfig", "hping"],
        answer: 1
      },
      {
        id: "22-6-9",
        question: "Statement I: Recovery Point Objective (RPO) is the maximum amount of data that will be lost following an interruption or disaster. Statement II: Recovery Time Objective (RTO) is the amount of data that will be lost following an interruption or disaster.",
        options: ["Statement I is TRUE and statement II is FALSE.", "Statement I is FALSE and statement II is TRUE.", "Both statements are TRUE.", "Both statements are FALSE."],
        answer: 0
      },
      {
        id: "22-6-10",
        question: "List the motivation(s) in having a 'middle man' or intelligent broker for cloud marketplace:",
        options: ["Trustworthiness of the provider.", "Monitoring of services.", "Ensuring vendor lock-in.", "Flexible selection of cloud provider."],
        answer: [0, 1, 3]
      }
    ],
    "7": [
      {
        id: "22-7-1",
        question: "Fog Computing is applicable in",
        options: ["Smart Grid", "Smart Traffic Light", "Connected Vehicles", "None of the above"],
        answer: [0, 1, 2]
      },
      {
        id: "22-7-2",
        question: "Fog Computing has probability to attack on data enrouter and required number of server nodes than Cloud Computing.",
        options: ["lower, less", "lower, large", "higher, less", "higher, large"],
        answer: 1
      },
      {
        id: "22-7-3",
        question: "Consider the following statements: Statement 1: In Geospatial Cloud, it is needed to integrate data from heterogeneous back-end data service. Statement 2: Data services can be inside and/or outside of the cloud environment in Geospatial Cloud.",
        options: ["Statement 1 is Correct, but Statement 2 is Incorrect.", "Statement 2 is Correct, but Statement 1 is Incorrect.", "Both statements are Correct.", "Both statements are Incorrect"],
        answer: 2
      },
      {
        id: "22-7-4",
        question: "Which of the following is/are the challenge(s) of the Geospatial Cloud?",
        options: ["Scaling of Spatial Databases", "Policy management among the tenants", "Implementation of Spatial Databases", "None of the above"],
        answer: [0, 1, 2]
      },
      {
        id: "22-7-5",
        question: "Which of the following is/are feature(s) of Mobile Cloud Computing?",
        options: ["Uses less mobile device resources because applications are cloud-supported", "Reduces reliability with information backed up and stored in the cloud", "Mobile devices connect to services delivered through an API architecture", "Facilitates slower development, delivery and management of mobile apps"],
        answer: [0, 2]
      },
      {
        id: "22-7-6",
        question: "Which of the following statement(s) is/are FALSE about Fog Computing?",
        options: ["Fog nodes present near to the end-user", "Fog computing enables real-time applications", "Fog nodes' response time is much higher than Cloud's", "Network routers, WiFi Gateways will not be capable of running applications"],
        answer: [2, 3]
      },
      {
        id: "22-7-7",
        question: "Choose the most appropriate option regarding CLOUDLET code offloading. Statement 1: The architecture reduces latency by using a multi-hop network. Statement 2: It potentially lowers battery consumption by using Wi-Fi or short range radio.",
        options: ["Statement 1 is correct but Statement 2 is incorrect", "Statement 2 is correct but Statement 1 is incorrect", "Both the statements are correct", "Both the statements are incorrect"],
        answer: 1
      },
      {
        id: "22-7-8",
        question: "Benefits of Fog Computing is/are:",
        options: ["Immobility", "Low latency and location-aware.", "Homogeneity", "Widespread geographical distribution."],
        answer: [1, 3]
      },
      {
        id: "22-7-9",
        question: "Distance between the client and server in Cloud Computing is of and Fog computing is",
        options: ["One Hop, Multiple Hop", "One Hop, One Hop", "Multiple Hop, One Hop", "Multiple Hop, Multiple Hop"],
        answer: 2
      },
      {
        id: "22-7-10",
        question: "Match the following tables related to Mobile Cloud Computing key components: | Table - I | Table - II | |---|---| | 1. Profiler | i. Collects results of split execution and combine, and make the execution details transparent to the user | | 2. Solver | ii. Monitors application execution to collect data about execution time, power consumption, network traffic | | 3. Synchronizer | iii. The task of selecting which parts of an app runs on mobile and cloud |",
        options: ["1->ii, 2->iii, 3->i", "1->iii, 2->i, 3->ii", "1->i, 2->ii, 3->iii", "1->ii, 2->i, 3->iii"],
        answer: 0
      }
    ],
    "8": [
      {
        id: "22-8-1",
        question: "For sensor resources that do not have direct connection to the cloud, sensor network proxy provides the connection.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-8-2",
        question: "Docker compose is a tool for defining and running multi-container Docker applications.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-8-3",
        question: "What does 'ps' signify as per Container terminology?",
        options: ["List of all containers", "List of all running containers", "List of all stopped containers", "List of all warm containers"],
        answer: 1
      },
      {
        id: "22-8-4",
        question: "Statement 1: Sensor-Cloud proxy exposes sensor resources as cloud services. Statement 2: Sensor network is still managed from the Sensor-Cloud Interface via Sensor Network Proxy",
        options: ["Statement 1 is True and Statement 2 is False", "Statement 2 is True and Statement 1 is False", "Both statements are True", "Both statements are False"],
        answer: 2
      },
      {
        id: "22-8-5",
        question: "Choose the most appropriate option. Statement 1: An image is a lightweight, stand-alone, executable package that includes everything to run a piece of software. Statement 2: Container is a run time instance of an image.",
        options: ["Statement 1 is correct but Statement 2 is incorrect", "Statement 2 is correct but Statement 1 is incorrect", "Both the statements are correct", "Both the statements are incorrect"],
        answer: 2
      },
      {
        id: "22-8-6",
        question: "Sensor data can be easily shared by different groups of users without any extra effort/measure.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: "22-8-7",
        question: "An IoT platform's basic building blocks is/are (choose the correct option(s)).",
        options: ["Gateway", "Images", "Network and Cloud", "Containers"],
        answer: [0, 2]
      },
      {
        id: "22-8-8",
        question: "Docker rmi is used to delete a local",
        options: ["image", "container", "volume", "node"],
        answer: 0
      },
      {
        id: "22-8-9",
        question: "In the context of Green Cloud Computing, the Power Usage Effectiveness is defined as",
        options: ["Power Delivered / Overall Power", "Overall Power / Power Delivered", "Overall Power * Power Delivered", "None of these"],
        answer: 1
      },
      {
        id: "22-8-10",
        question: "Vehicles providing their networking and data processing capabilities to other vehicles through the cloud come under which service of IoT-based Vehicular Data Clouds.",
        options: ["SaaS", "PaaS", "IaaS", "None of these"],
        answer: 2
      }
    ],
    "9": [
      {
        id: "22-9-1",
        question: "Fog computing is a model in which data, processing and applications are concentrated in devices at the rather than existing almost entirely in the cloud.",
        options: ["fog", "local node", "network station", "network edge"],
        answer: 3
      },
      {
        id: "22-9-2",
        question: "In the Cloud-Fog-Edge Computing paradigm, sensors being end devices, can perform basic data processing",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-9-3",
        question: "What is(are) the benefit(s) of Fog computing?",
        options: ["Provides less data location-awareness", "Increases network congestion", "Causes lesser latency permits usage in real-time applications", "None of these"],
        answer: 2
      },
      {
        id: "22-9-4",
        question: "The used for resource management in fog/edge computing are classified on the basis of data flow, control and tenancy.",
        options: ["Algorithms", "Architectures", "Hardware", "Infrastructure"],
        answer: 1
      },
      {
        id: "22-9-5",
        question: "Virtualization software is an example of",
        options: ["Application software", "Middleware", "System software", "Benchmarking"],
        answer: 2
      },
      {
        id: "22-9-6",
        question: "Fog infrastructure consists of IoT devices, Fog Nodes, and at least one Cloud Data Center never ensures scalability",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: "22-9-7",
        question: "What is(are) the application placement constraint(s) for fog nodes?",
        options: ["Network constraints", "Interoperability", "Resource constraints", "None of these"],
        answer: [0, 2]
      },
      {
        id: "22-9-8",
        question: "Cloud Federation should prefer maximum geographical separation.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-9-9",
        question: "Benefit(s) of cloud federation is(are)",
        options: ["Global Utility", "Resource utilization minimization", "Power consumption maximization", "All of these"],
        answer: 0
      },
      {
        id: "22-9-10",
        question: "A CSP has little or no control over remote resources in case of",
        options: ["Tightly Coupled Federation", "Medium Coupled Federation", "Loosely Coupled Federation", "None of these"],
        answer: 2
      }
    ],
    "10": [
      {
        id: "22-10-1",
        question: "Post-copy and Pre-copy migration approaches are followed in:",
        options: ["Live Migration process", "Non-live Migration process", "Hybrid Migration process", "None of these"],
        answer: 0
      },
      {
        id: "22-10-2",
        question: "Private Docker registry is a service that stores Docker images.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-10-3",
        question: "What is(are) the key advantage(s) of Docker?",
        options: ["Facilitating microservices", "Modeling networks.", "Packaging software", "None of these"],
        answer: [0, 1, 2]
      },
      {
        id: "22-10-4",
        question: "Which of the following statement is most appropriate about Docker?",
        options: ["Docker is a platform that allows to build and run but not ship apps.", "Docker is a platform that allows to build and ship but but not to run apps.", "Docker is a platform that allows to build, ship and, run apps.", "Docker is a platform that only allows to ship and run but not to build apps."],
        answer: 2
      },
      {
        id: "22-10-5",
        question: "A Kubernetes cluster consists of set of worker machines, called",
        options: ["Pods", "Nodes", "Control plane", "Centers"],
        answer: 1
      },
      {
        id: "22-10-6",
        question: "Docker builds are more reproducible and replicable than traditional software building methods.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-10-7",
        question: "Containers are similar to VMs but they have unrelaxed isolation properties to share the operating system among the applications.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: "22-10-8",
        question: "In Docker utility, is a collection of filesystem layers and some metadata that, if taken together, can be spun up as Docker containers.",
        options: ["Operating System", "Microservice", "Virtual Machine", "Image"],
        answer: 3
      },
      {
        id: "22-10-9",
        question: "With VM memory size of 1024 GB and the transmission rate to be 16 MB/sec What is the total migration time? Choose the closest correct option.",
        options: ["32 hours", "18 hours", "26 hours", "24 hours"],
        answer: 1
      },
      {
        id: "22-10-10",
        question: "Choose the most appropriate option. Statement 1: Container is a lightweight virtualization technique. Statement 2: Container contains the code and all its dependencies.",
        options: ["Only statement 1 is true", "Only statement 2 is true", "Both statement 1 and 2 are true", "Both the statements are false"],
        answer: 2
      }
    ],
    "11": [
      {
        id: "22-11-1",
        question: "are an important distribution mechanism for libraries and custom runtimes in AWS serverless ecosystem.",
        options: ["Runtimes", "Lambda Layers", "Log streams", "None of these"],
        answer: 1
      },
      {
        id: "22-11-2",
        question: "is a fully managed proprietary NoSQL database service that supports key-value and document data structures.",
        options: ["Amazon DynamoDB", "AWS S3", "AWS Lambda", "Amazon EFS"],
        answer: 0
      },
      {
        id: "22-11-3",
        question: "Which component(s) of CDCs contribute(s) to consumption of huge amount of energy?",
        options: ["Network", "Storage", "Memory", "Cooling system"],
        answer: [0, 1, 2, 3]
      },
      {
        id: "22-11-4",
        question: "Serverless covers a wide range of technologies that can be grouped into two categories",
        options: ["BaaS and YaaS", "FaaS and BaaS", "FaaS and YaaS", "None of these"],
        answer: 1
      },
      {
        id: "22-11-5",
        question: "Runtimes allows you to annotate your function code with custom logging statements which helps you to analyse the execution flow and performance of your AWS Lambda functions.",
        options: ["True", "False"],
        answer: 1
      },
      {
        id: "22-11-6",
        question: "Which of the following is not a category of a research initiative on sustainable cloud computing?",
        options: ["Renewable Energy", "Capacity planning", "Environment Sandboxing", "None of these"],
        answer: 2
      },
      {
        id: "22-11-7",
        question: "VMs can be migrated to a remote CDC to balance the load effectively as per sustainable cloud computing model.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-11-8",
        question: "The focus of cloud computing was and the serverless is",
        options: ["programmers, system administrators", "system administrators, programmers"],
        answer: 1
      },
      {
        id: "22-11-9",
        question: "In Google Cloud Functions, the code executes in a fully managed environment.",
        options: ["True", "False"],
        answer: 0
      },
      {
        id: "22-11-10",
        question: "Which of the following is/are the goal of sustainable cloud computing? Choose appropriate option(s).",
        options: ["Minimizing the energy consumption.", "Increasing reliability of CDCs.", "Maximizing carbon footprint related cost.", "Increasing network traffic"],
        answer: [0, 1]
      }
    ],
    "12": [
      {
        id: "22-12-1",
        question: "What is the purpose of 5G wireless technology?",
        options: ["Deliver lower data speeds", "Deliver higher data speeds", "Decrease network capacity", "Decrease availability"],
        answer: 1
      },
      {
        id: "22-12-2",
        question: "What is the benefit of 5G’s ability to scale down in data rates, power, and mobility for IoT devices?",
        options: ["It provides extremely lean and low-cost connectivity solutions", "It allows for faster data rates and lower latency", "It enables immersive experiences like VR and AR", "It provides ultra-reliable, low-latency links for mission-critical communications."],
        answer: 0
      },
      {
        id: "22-12-3",
        question: "How are mobile devices connected to mobile networks in Mobile Cloud Computing?",
        options: ["Through cloud storage servers", "Through remote access protocols", "Through base stations such as base transceiver station, access point, or satellite", "Through peer-to-peer connections"],
        answer: 2
      },
      {
        id: "22-12-4",
        question: "What drives the need for heterogeneous and distributed computing architectures?",
        options: ["Resource-constrained low-latency devices", "Distant cloud data centres", "High-speed internet connections", "Availability of low-cost computing devices"],
        answer: 0
      },
      {
        id: "22-12-5",
        question: "What are the different aspects of CPS?",
        options: ["Cyber, physical, and communication only", "Cyber, dynamics, and safety only", "Cyber, physical, and computation only", "Cyber, physical, computation, dynamics, communication, security, and safety"],
        answer: 3
      },
      {
        id: "22-12-6",
        question: "What role will service orchestration play in the future of industrial applications?",
        options: ["It will limit the interaction of industrial applications with network resources", "It will not influence traffic routing for industrial applications.", "It will enable industrial applications to interact with the network resources in advanced ways.", "It will not select the location and quality of service for industrial applications."],
        answer: 2
      },
      {
        id: "22-12-7",
        question: "What is the purpose of spatial analysis?",
        options: ["To study the characteristics of people and their behaviors", "To study the characteristics of places and regions and their relationships", "To analyze financial data and make investment decisions", "To create maps of the physical world"],
        answer: 1
      },
      {
        id: "22-12-8",
        question: "How is the signal obtained from the accelerometer data for activity detection?",
        options: ["By calculating the square root of the x-axis, y-axis, and z-axis signals", "By averaging the x-axis, y-axis, and z-axis signals", "By subtracting the x-axis, y-axis, and z-axis signals", "By multiplying the x-axis, y-axis, and z-axis signals"],
        answer: 0
      },
      {
        id: "22-12-9",
        question: "According to the given definition, which of the following statement(s) is (are) true about dew computing?",
        options: ["Dew computing is a cloud computing paradigm where all computing is done on the cloud without any reliance on on-premises computers.", "Dew computing is a paradigm where on-premises computers provide functionality that is dependent on cloud services.", "Dew computing is a paradigm where on-premises computers and cloud services are completely isolated from each other and do not collaborate in any way.", "Dew computing is a paradigm where on-premises computers provide functionality that is independent of cloud services and is also collaborative with cloud services."],
        answer: 3
      },
      {
        id: "22-12-10",
        question: "According to the given objectives, which of the following statement(s) is (are) true about the proposed health model?",
        options: ["The health model is designed for cloud computing and does not make use of fog or edge computing.", "The health model is designed for edge computing only and does not make use of cloud or fog computing.", "The health model is designed for fog-edge computing and aims to reduce latency, network usage and cost incurred in the cloud.", "The health model is designed for dew computing and does not make use of cloud, fog, or edge computing."],
        answer: 2
      }
    ]
  },




  "2023": {
      "1": [
        {
          id: "23-1-1",
          question: "Which software does prevent external access to a system?",
          options: ["Firewall", "Gateway", "Router", "Virus checker"],
          answer: 0
        },
        {
          id: "23-1-2",
          question: "Which classes are used for connection-less socket programming?",
          options: ["Datagram Socket", "Datagram Packet", "Both Datagram Socket & Datagram Packet", "Server Socket"],
          answer: 2
        },
        {
          id: "23-1-3",
          question: "Which of the following is most appropriate about Threads? Threads of a process share",
          options: ["only global variables.", "only heap.", "neither global variables nor heap.", "both heap and global variables."],
          answer: 3
        },
        {
          id: "23-1-4",
          question: "What is the maximum number of hosts under class B addresses?",
          options: ["65536", "65534", "65535", "254"],
          answer: 1
        },
        {
          id: "23-1-5",
          question: "Consider a system with 2 level caches. Access times of Level 1 cache, Level 2 cache, and main memory are 1 ns, 10 ns, and 400 ns, respectively. The hit rates of Level 1 and Level 2 caches are 0.8 and 0.9, respectively. What is the average access time of the system ignoring the search time within the cache?",
          options: ["12.6 ns", "11.2 ns", "10.6 ns", "12.4 ns"],
          answer: 2
        },
        {
          id: "23-1-6",
          question: "Using a larger block size in a fixed block size file system leads to",
          options: ["better disk throughput but poorer disk space utilization", "better disk throughput and better disk space utilization", "poorer disk throughput but better disk space utilization", "poorer disk throughput and poorer disk space utilization"],
          answer: 0
        },
        {
          id: "23-1-7",
          question: "Transport layer is implemented in the Firmware of a computer system.",
          options: ["True", "False"],
          answer: 1
        },
        {
          id: "23-1-8",
          question: "A computer's processor sends 32 bit addresses to the cache controller. It has a 512 KByte, 8-way set associative, write back data cache with block size of 32 Bytes. In addition to the address tag, each cache tag directory entry contains 3 valid bits and 1 modified bit. Find the size of the cache tag directory.",
          options: ["212 Kbits", "320 Kbits", "160 Kbits", "120 Kbits"],
          answer: 1
        },
        {
          id: "23-1-9",
          question: "Flow control is mainly implemented in",
          options: ["Physical Layer", "Application Layer", "Transport Layer", "Session Layer"],
          answer: 2
        },
        {
          id: "23-1-10",
          question: "Where does the swap space reside?",
          options: ["RAM", "Disk", "ROM", "On-chip cache"],
          answer: 1
        }
      ],
      "2": [
        {
          id: "23-2-1",
          question: "Utility computing encapsulates the following characteristic(s)",
          options: ["Mobility amalgamation", "No impact on resource utilization", "Pay-per-use pricing business model", "None of above"],
          answer: 2
        },
        {
          id: "23-2-2",
          question: "In the context of the client-server architecture: Statement (i) posits that virtualization is a fundamental principle; Statement (ii) claims that the system has limited scalability.",
          options: ["Only Statement (i) is correct", "Only Statement (ii) is correct", "Both Statements (i) and (ii) are correct", "None of the statements is correct"],
          answer: 1
        },
        {
          id: "23-2-3",
          question: "A cluster is a type of or distributed computing platform consisting of a collection of interconnected stand-alone computing computers working together in a computing resource.",
          options: ["computers, parallel", "single integrated, parallel", "node, parallel", "parallel, single integrated"],
          answer: 3
        },
        {
          id: "23-2-4",
          question: "Dropbox is an example of:",
          options: ["Software as a Service or SaaS", "Platform as a Service or PaaS", "Function as a Service or FaaS", "Infrastructure as a Service or IaaS"],
          answer: 0
        },
        {
          id: "23-2-5",
          question: "For less data-intensive applications, horizontal scale-out elasticity is the ideal solution.",
          options: ["True", "False"],
          answer: 1
        },
        {
          id: "23-2-6",
          question: "The combination of Service-Oriented Infrastructure and Cloud Computing leads to",
          options: ["PaaS", "FaaS", "Serverless", "XaaS"],
          answer: 3
        },
        {
          id: "23-2-7",
          question: "Utility computing is a service-provisioning model, in which a service provider makes computing resources and infrastructure management available to the customer.",
          options: ["True", "False"],
          answer: 0
        },
        {
          id: "23-2-8",
          question: "Which of the following is false?",
          options: ["Private cloud is dedicated solely to an organization.", "Community cloud is a composition of public and private cloud.", "Public cloud is available to the general public.", "None of these"],
          answer: 1
        },
        {
          id: "23-2-9",
          question: "Which of the following is one of the characteristics of PaaS?",
          options: ["Provides tools to deploy user applications", "Application is provided by the cloud provider", "Resources are distributed as a service", "None of these"],
          answer: 0
        },
        {
          id: "23-2-10",
          question: "Which of the following is/are a type of Grid?",
          options: ["Computational Grid", "Data Grid", "Edge Grid", "All of the above"],
          answer: [0, 1]
        }
      ],
      "3": [
        {
          id: "23-3-1",
          question: "generally stores the cloud subscriber's metadata like user credentials and OS images.",
          options: ["SLA (Service Level Agreement)", "Cloud Manager", "DOS (Data Object storage)", "MOS (Metadata Object storage)"],
          answer: 2
        },
        {
          id: "23-3-2",
          question: "Universal Description, Discovery, and Integration (UDDI) represents a format for data exchange, designed to hold and convey data objects that are made up of pairs of attributes and values.",
          options: ["True", "False"],
          answer: 0
        },
        {
          id: "23-3-3",
          question: "Which factors should an organization consider while planning to deploy an outsourced private cloud?",
          options: ["Only Network Dependency", "Only Risks from multi-tenancy", "Both Network Dependency and Risks from multi-tenancy", "Neither Network Dependency nor Risks from multi-tenancy"],
          answer: 2
        },
        {
          id: "23-3-4",
          question: "What is/are the main difference(s) between virtualization and dual boot?",
          options: ["In virtualization, both operating systems run simultaneously, but not in dual boot.", "In virtualization, operating systems are not isolated from each other, but not in dual boot.", "In a dual boot, both operating systems run simultaneously, but not in virtualization.", "No difference between dual boot and virtualization."],
          answer: 0
        },
        {
          id: "23-3-5",
          question: "Web services enhance distributed interoperability through the use of open standards, enabling any two software components to communicate and are designed to address firewall issues.",
          options: ["True", "False"],
          answer: 0
        },
        {
          id: "23-3-6",
          question: "Ubuntu Enterprise Cloud (UEC) is an example of",
          options: ["Public cloud", "Hybrid cloud", "Private cloud", "Community Cloud"],
          answer: 2
        },
        {
          id: "23-3-7",
          question: "Cloud Manager is the public access point to the cloud where subscribers up for accounts and has a mechanism for subscribers.",
          options: ["sign, integrating", "sign, authenticating", "sign, accessing", "access, authenticating"],
          answer: 1
        },
        {
          id: "23-3-8",
          question: "Hypervisor is also known as",
          options: ["Cluster Manager", "Virtual Machine Handler", "Virtual Machine Manager", "Virtual Machine Monitor"],
          answer: 3
        },
        {
          id: "23-3-9",
          question: "Simple Object Access Protocol (SOAP) provides a way to communicate between applications running on different operating systems, with the same technologies and programming languages.",
          options: ["True", "False"],
          answer: 1
        },
        {
          id: "23-3-10",
          question: "While DOM operates on the documents as a whole, parsers operate on each piece of the XML document sequentially.",
          options: ["FTP", "MQTT", "SAX", "XAS"],
          answer: 2
        }
      ],

      
  "4": [
    {
      "id": "23-4-1",
      "question": "Which of the following system/ architecture follow(s) Quorum protocol for a large number of concurrent reads & writes?",
      "options": ["Google File System (GFS)", "BigTable", "Dynamo", "None of the above"],
      "answer": 2
    },
    {
      "id": "23-4-2",
      "question": "Statement 1: In ephemeral storage, the stored objects persist until the VM is terminated. Statement 2: The ephemeral storage is managed by Cinder in OpenStack.",
      "options": ["Statement 1 is TRUE, Statement 2 is FALSE", "Statement 2 is TRUE, Statement 1 is FALSE", "Both statements are TRUE", "Both statements are FALSE"],
      "answer": 0
    },
    {
      "id": "23-4-3",
      "question": "Column-oriented storage is efficient for data-warehouse workloads.",
      "options": ["TRUE", "FALSE"],
      "answer": 0
    },
    {
      "id": "23-4-4",
      "question": "Horizon is a self-service portal to interact with underlying OpenStack services",
      "options": ["mobile based", "OS based", "web based", "None of the above"],
      "answer": 2
    },
    {
      "id": "23-4-5",
      "question": "What is the parallel efficiency (Eff) of an algorithm, when a task takes time T in uniprocessor system, P is number of processors, M is time taken by each processor?",
      "options": ["Eff = (T*P)/M", "Eff = T*(M/P)", "Eff = T*P*M", "Eff = T/(P*M)"],
      "answer": 3
    },
    {
      "id": "23-4-6",
      "question": "In cloud, service downtime is 30 minutes and availability of the service is 0.80. What is the service uptime?",
      "options": ["120 minutes", "60 minutes", "150 minutes", "135 minutes"],
      "answer": 2
    },
    {
      "id": "23-4-7",
      "question": "Which of the following is/are NOT SLA requirement(s) of PaaS cloud delivery model?",
      "options": ["Data Retention and Deletion", "Privacy", "Machine-Readable SLAs", "Certification"],
      "answer": [0, 2]
    },
    {
      "id": "23-4-8",
      "question": "What does the 'availability' metric represent in the monitoring and auditing of SLAs?",
      "options": ["The speed at which a service responds", "How often the service is available", "The ability for a resource to grow infinitely", "The percentage of uptime for a service"],
      "answer": 3
    },
    {
      "id": "23-4-9",
      "question": "What architecture is used in a parallel database for the efficient execution of SQL queries?",
      "options": ["Shared memory architecture", "Shared disk architecture", "Shared nothing architecture", "Shared cache architecture"],
      "answer": 2
    },
    {
      "id": "23-4-10",
      "question": "is used for networking services in OpenStack.",
      "options": ["Keystone", "Neutron", "Cinder", "Swift"],
      "answer": 1
    }
  ],
  "5": [
    {
      "id": "23-5-1",
      "question": "Which of the following statement(s) is/are FALSE for Microsoft Azure Resource Group?",
      "options": ["It is a logical container", "It manages Azure resources", "It deploys web apps, databases, and storage accounts", "It is a physical container"],
      "answer": 3
    },
    {
      "id": "23-5-2",
      "question": "Statement 1: Azure supports public cloud platforms. Statement 2: Azure App Service plan defines security.",
      "options": ["Statement 1 is TRUE, Statement 2 is FALSE", "Statement 2 is TRUE, Statement 1 is FALSE", "Both statements are TRUE", "Both statements are FALSE"],
      "answer": 0
    },
    {
      "id": "23-5-3",
      "question": "Google Cloud Datastore provides flexible object storage with global edge caching.",
      "options": ["TRUE", "FALSE"],
      "answer": 1
    },
    {
      "id": "23-5-4",
      "question": "Google APIs help to:",
      "options": ["scale up the app according to the demand/ service requests.", "integrate Google's services into the application.", "migrate the web app to Google Cloud Platform.", "None of the above"],
      "answer": 1
    },
    {
      "id": "23-5-5",
      "question": "Which of the following is/are storage service(s) provided by Google Cloud Platform(GCP)?",
      "options": ["Cloud SQL", "BigQuery", "Cloud Datastore", "Cloud Endpoints"],
      "answer": [0, 2]
    },
    {
      "id": "23-5-6",
      "question": "Match the following columns: | Column I | Column II | |---|---| | A. GoogleAppEngine | 1. Integrates Google's services into end users' application | | B. GoogleCloudEndpoints | 2. Helps end users' application scalability | | C. GoogleAPI | 3. Helps to migrate web application to Google Cloud Platform |",
      "options": ["A-3, B-2, C-1", "A-1, B-2, C-3", "A-3, B-1, C-2", "A-2, B-1, C-3"],
      "answer": 0
    },
    {
      "id": "23-5-7",
      "question": "In OpenStack, when a VM is terminated, which of the following memory resources are freed?",
      "options": ["Ephemeral storage", "Block Storage", "Persistent Storage", "RAM"],
      "answer": [0, 3]
    },
    {
      "id": "23-5-8",
      "question": "Statement 1: When deploying the Azure app remotely, the login password of the Azure account needs to be entered when the system asks for password. Statement 2: In Microsoft Azure, a deployment user is required for FTP and local Git deployment to a web app.",
      "options": ["Statement 1 is True and Statement 2 is False", "Statement 1 is False and Statement 2 is True", "Both are True", "Both are False"],
      "answer": 1
    },
    {
      "id": "23-5-9",
      "question": "The Azure App pan has a scale count of instances.",
      "options": ["1 to 10", "1 to 100", "1 to 50", "1 to 20"],
      "answer": 3
    },
    {
      "id": "23-5-10",
      "question": "While developing a web-app using Google App Engine, the development server should not be kept running when changes are made to the source file.",
      "options": ["TRUE", "FALSE"],
      "answer": 1
    }
  ],
  "6": [
    {
      "id": "23-6-1",
      "question": "is a formal contract between a Service Provider (SP) and a Service Consumer (SC).",
      "options": ["SLO", "SLA", "KPI", "Utility Premium"],
      "answer": 1
    },
    {
      "id": "23-6-2",
      "question": "Statement 1: SLA contains SLO. Statement 2: Multiple KPIs are aggregated to SLA.",
      "options": ["Statement 1 is TRUE and Statement 2 is FALSE", "Statement 2 is TRUE and Statement 1 is FALSE", "Both statements are TRUE", "Both statements are FALSE"],
      "answer": 0
    },
    {
      "id": "23-6-3",
      "question": "If demand is flat, the penalty will be linear.",
      "options": ["TRUE", "FALSE"],
      "answer": 1
    },
    {
      "id": "23-6-4",
      "question": "What is/are the correct statement(s) regarding VM load management?",
      "options": ["When load increases, new VMs should be scheduled to new nodes.", "When load decreases, use WOL to start up waiting nodes.", "When load increases, use WOL to start up waiting nodes.", "When load decreases, live migrate VMs to more utilized nodes."],
      "answer": [0, 2, 3]
    },
    {
      "id": "23-6-5",
      "question": "A company XYZ needs to support a spike in demand when it becomes popular followed potentially by a reduction once some of the visitors turn away. The company has two options to satisfy the requirements which are given in the following table: | Expenditure | In-house server (INR) | Cloud server (INR) | |---|---|---| | Purchase cost | 1,80,000 | - | | Cost/hour (over three-year span) | - | 32 | | Efficiency | 60% | 80% | | Power and cooling (cost/hour) | 25 | - | | Management cost (cost/hour) | 10 | 2 | Select the correct statement(s) regarding the value(s) of (total-cost/effective-hour) for both the options.",
      "options": ["Total-cost / Effective-hour for in-house server is 81.42 INR over three years.", "Total-cost / Effective-hour for cloud server is 42 INR.", "Total-cost / Effective-hour for in-house server is 46.42 INR over three years.", "Total-cost / Effective-hour for cloud server is 40 INR."],
      "answer": [1, 2]
    },
    {
      "id": "23-6-6",
      "question": "A third-party application runs in the cloud for 12 hours/day. At the end of one month [30 days], it was found that the cloud service suffered 5 outages of durations: 1 hour 30 minutes, 30 minutes, 2 hours 15 minutes, 1 hour 45 minutes and T hours, each on different days over the service period. Suppose a cloud guarantees service availability for 97% of time. What are the possible value(s) of T that SLA negotiation gets honored in terms of service availability?",
      "options": ["3 hours", "6 hours", "12 hours", "8 hours"],
      "answer": 0
    },
    {
      "id": "23-6-7",
      "question": "Which of the following is/are objective(s) of Resource Management?",
      "options": ["Increased latency", "Scalability", "Improved throughput", "Improved security"],
      "answer": [1, 2]
    },
    {
      "id": "23-6-8",
      "question": "Which of the following is/are resource allocation approaches in resource management?",
      "options": ["Energy-aware resource allocation", "Reinforcement learning guided control policy", "Network queueing model", "Intelligent multi-agent model"],
      "answer": [0, 3]
    },
    {
      "id": "23-6-9",
      "question": "Statement 1: Each reducer groups the results of the map step using different keys and performs a function f on the list of values that correspond to these keys. Statement 2: Files are sorted by a key and stored to the local file system.",
      "options": ["Statement 1 is TRUE and Statement 2 is FALSE", "Statement 2 is TRUE and Statement 1 is FALSE", "Both statements are TRUE", "Both statements are FALSE"],
      "answer": 1
    },
    {
      "id": "23-6-10",
      "question": "In computing, there is a nonlinear relationship between the number of processing cores used and power consumption",
      "options": ["TRUE", "FALSE"],
      "answer": 0
    }
  ],
  "7": [
    {
      "id": "23-7-1",
      "question": "Modification is an attack on:",
      "options": ["Authenticity", "Integrity", "Confidentiality", "Availability"],
      "answer": 1
    },
    {
      "id": "23-7-2",
      "question": "Which of the following is/are example(s) of passive attack?",
      "options": ["Replay", "Denial of service", "Traffic analysis", "Masquerade"],
      "answer": 2
    },
    {
      "id": "23-7-3",
      "question": "Which of the following is/are the recovery goal(s) of the security mechanism?",
      "options": ["Prevent attackers from violating security policy", "Detect attackers' violation of security policy", "Stop attack, assess and repair damage", "Continue to function correctly even if attack succeeds"],
      "answer": [2, 3]
    },
    {
      "id": "23-7-4",
      "question": "Statement I: Authorization is the identification of legitimate users. Statement II: Integrity is the protection against data alteration/corruption.",
      "options": ["Statement I is TRUE and statement II is FALSE.", "Statement I is FALSE and statement II is TRUE.", "Both statements are TRUE.", "Both statements are FALSE."],
      "answer": 1
    },
    {
      "id": "23-7-5",
      "question": "Which of the following is/are hypervisor risks associated with rogue hypervisor rootkits?",
      "options": ["Vulnerable virtual machine applications like Vmchat, VMftp, Vmcat etc.", "Hypervisor that hides itself from normal malware detection systems", "Improper configuration of VM.", "Hypervisor that creates a covert channel to dump unauthorized code."],
      "answer": [1, 3]
    },
    {
      "id": "23-7-6",
      "question": "| 1. Injection attack | (a) Attacker sending huge amounts of requests to a certain service and causing denial of service. | | 2. Flooding | (b) Browser-based security issues. | | 3. Metadata (WSDL) spoofing attack | (c) Introduce malicious code to change the course of execution. | | | (d) Malicious reengineering of Web Services' metadata description. |",
      "options": ["1-(a), 2-(b), 3-(d)", "1-(c), 2-(a), 3-(d)", "1-(b), 2-(c), 3-(d)", "1-(a), 2-(c), 3-(d)"],
      "answer": 1
    },
    {
      "id": "23-7-7",
      "question": "Recovery Time Objective (RTO) represents the period of time allowed for the complete execution of the task.",
      "options": ["TRUE", "FALSE"],
      "answer": 1
    },
    {
      "id": "23-7-8",
      "question": "Which of the following Open-source tools is/are used to perform TCP connect probes on the Amazon EC2 platform?",
      "options": ["nmap", "wget", "ipconfig", "hping"],
      "answer": 0
    },
    {
      "id": "23-7-9",
      "question": "In para virtualization, VMs interact with the host OS.",
      "options": ["TRUE", "FALSE"],
      "answer": 0
    },
    {
      "id": "23-7-10",
      "question": "In conflict removal, when is introduction of a virtual role required?",
      "options": ["In case of violation of SoD constraint violation.", "In case of cyclic inheritance conflict where exactly matched role set exists.", "In case of cyclic inheritance conflict where no exactly matched role set exists.", "None of the above."],
      "answer": 2
    }
  ],
  "8": [
    {
      "id": "23-8-1",
      "question": "Which of the following is/are key requirement(s) of Mobile Cloud Computing?",
      "options": ["Simple APIs offering access to mobile services", "Internet access to remotely stored applications in the cloud", "Sophisticated APIs requiring knowledge of underlying network technologies", "Web interface"],
      "answer": [0, 1, 3]
    },
    {
      "id": "23-8-2",
      "question": "In Mobile Cloud Computing, the synchronizer module collects results of split execution and combines them, and makes the execution details transparent to the user.",
      "options": ["TRUE", "FALSE"],
      "answer": 0
    },
    {
      "id": "23-8-3",
      "question": "Geographical distribution of server nodes is in Fog Computing and in Cloud Computing.",
      "options": ["Distributed, Centralized", "Distributed, Distributed", "Centralized, Distributed", "Centralized, Centralized"],
      "answer": 0
    },
    {
      "id": "23-8-4",
      "question": "Formulate the amount of energy saved (E) during offloading for the given data. Energy cost/second while when mobile phone is doing computation = C1 Energy cost/second while when mobile phone is idle = C2 Energy cost/second while when mobile phone is transmitting the data = C3 Speed of cloud to compute k instructions = Sc Speed of mobile to compute k instructions = Sm Data need to transmit = D Bandwidth of the wireless Internet = B",
      "options": ["E = C2*(k/Sm) - C1*(k/Sc) - C3*(D/B)", "E = C1*(k/Sm) - C2*(k/Sc) - C3*(D/B)", "E = C3*(k/Sm) - C2*(k/Sc) - C1*(D/B)", "E = C1*(k/Sc) - C2*(k/Sm) - C3*(D/B)"],
      "answer": 1
    },
    {
      "id": "23-8-5",
      "question": "Which of the following is/are not a benefit of Fog computing?",
      "options": ["Location awareness", "Higher latency as compared to cloud computing", "Improved QoS", "Man-in-the-middle-attack"],
      "answer": [1, 3]
    },
    {
      "id": "23-8-6",
      "question": "Population of a city/town is a static geographic information.",
      "options": ["TRUE", "FALSE"],
      "answer": 1
    },
    {
      "id": "23-8-7",
      "question": "Which of the following statement(s) is/are FALSE about Fog Computing?",
      "options": ["Intelligence is brought to the cloud from the end users.", "Fog computing is used for real-time applications", "Fog nodes' response time is higher than cloud server", "Network routers, WiFi Gateways will be capable of running applications"],
      "answer": [0, 2]
    },
    {
      "id": "23-8-8",
      "question": "Fog Computing has number of server nodes and has delay jitter compared to Cloud Computing.",
      "options": ["small, higher", "large, higher", "small, lower", "large, lower"],
      "answer": 3
    },
    {
      "id": "23-8-9",
      "question": "In Geospatial Cloud Models, which level of interoperability ensures the ability to 'consume' the information?",
      "options": ["Service Level Interoperability", "Security Level Interoperability", "Data Level Interoperability", "None of the above"],
      "answer": 2
    },
    {
      "id": "23-8-10",
      "question": "Consider the statements and select the correct answer: Statement I: In Geospatial cloud, data services in cloud can be run through IaaS service model. Statement II: Web service is the key technology to provide Geospatial services.",
      "options": ["Statement 1 is correct but Statement 2 is incorrect", "Statement 2 is correct but Statement 1 is incorrect", "Both the statements are correct", "Both the statements are incorrect"],
      "answer": 1
    }
  ],
  "9": [
    {
      "id": "23-9-1",
      "question": "Docker compose is a tool for defining and running multi-container Docker applications.",
      "options": ["True", "False"],
      "answer": 0
    },
    {
      "id": "23-9-2",
      "question": "Choose the most appropriate option. Statement 1: An image is a lightweight, stand-alone, executable package that includes everything to run a piece of software. Statement 2: Container is a run time instance of an image.",
      "options": ["Statement 1 is correct but Statement 2 is incorrect", "Statement 2 is correct but Statement 1 is incorrect", "Both the statements are correct", "Both the statements are incorrect"],
      "answer": 2
    },
    {
      "id": "23-9-3",
      "question": "Vehicles providing their networking and data processing capabilities to other vehicles through the cloud comes under which service of IoT-based Vehicular Data Clouds.",
      "options": ["SaaS", "PaaS", "IaaS", "None of these"],
      "answer": 2
    },
    {
      "id": "23-9-4",
      "question": "An IoT platform's basic building blocks is/ are (choose the correct option(s)).",
      "options": ["Gateway", "Images", "Network and Cloud", "Containers"],
      "answer": [0, 2]
    },
    {
      "id": "23-9-5",
      "question": "In the context of Green Cloud Computing, the Power Usage Effectiveness is defined as",
      "options": ["Power Delivered / Overall Power", "Overall Power / Power Delivered", "Overall Power * Power Delivered", "None of these"],
      "answer": 1
    },
    {
      "id": "23-9-6",
      "question": "Statement 1: Sensor-Cloud proxy exposes sensor resources as cloud services. Statement 2: Sensor network is still managed from the Sensor-Cloud Interface via Sensor Network Proxy",
      "options": ["Statement 1 is True and Statement 2 is False", "Statement 2 is True and Statement 1 is False", "Both statements are True", "Both statements are False"],
      "answer": 2
    },
    {
      "id": "23-9-7",
      "question": "Which of the following statements is/are true about Docker? Statement 1: Docker hub is used for building docker images and creating docker containers. Statement 2: Docker compose is a registry used to host various docker images.",
      "options": ["Statement 1 is correct but Statement 2 is incorrect", "Statement 2 is correct but Statement 1 is incorrect", "Both the statements are correct", "Both the statements are incorrect"],
      "answer": 3
    },
    {
      "id": "23-9-8",
      "question": "Sensor data can be easily shared by different groups of users without any extra effort/ measure.",
      "options": ["True", "False"],
      "answer": 1
    },
    {
      "id": "23-9-9",
      "question": "get virtual access to host resources through a hypervisor.",
      "options": ["Containers", "Virtual machines", "Both a and b", "Images"],
      "answer": 1
    },
    {
      "id": "23-9-10",
      "question": "enables different networks, spreads in a huge geographical area to connect together and be employed simultaneously by multiple users on demand.",
      "options": ["Serverless", "IoT Cloud", "Sensor Cloud", "Green Cloud"],
      "answer": 2
    }
  ],
  "10": [
    {
      "id": "23-10-1",
      "question": "In which of the following architectures, two or more partner clouds interoperate to aggregate their resources and provide users with a larger virtual infrastructure?",
      "options": ["Hybrid/Bursting Architecture", "Aggregated Architecture", "Broker Architecture", "Multiplier Architecture"],
      "answer": 1
    },
    {
      "id": "23-10-2",
      "question": "Select the correct statement(s) regarding offloading.",
      "options": ["Offloading is a technique in which a server, an application, and the associated data are moved from the edge to the cloud.", "Offloading augments the computing requirements of individuals or a collection of user devices.", "Offloading from cloud to the edge can be achieved by server offloading.", "Offloading from user device to edge can be achieved by application partitioning."],
      "answer": [1, 2, 3]
    },
    {
      "id": "23-10-3",
      "question": "Fog computing is a model in which data, processing and applications are concentrated in devices at the rather than existing almost entirely in the cloud.",
      "options": ["fog", "local node", "network station", "network edge"],
      "answer": 3
    },
    {
      "id": "23-10-4",
      "question": "According to the service placement taxonomy in fog-edge computing, which of the following can be classified as online vs offline?",
      "options": ["Control plan design", "Placement characteristic", "System dynamicity", "Mobility support"],
      "answer": 1
    },
    {
      "id": "23-10-5",
      "question": "Fog infrastructure consisting of IoT devices, Fog Nodes, and at least one Cloud Data Center never ensures scalability",
      "options": ["True", "False"],
      "answer": 1
    },
    {
      "id": "23-10-6",
      "question": "Cloud Federation should prefer maximum geographical separation.",
      "options": ["True", "False"],
      "answer": 0
    },
    {
      "id": "23-10-7",
      "question": "In which of the following cloud federation architectures, creation of cross-site networks and cross-site migration of VMs are used?",
      "options": ["Loosely coupled federation", "Partially coupled federation", "Tightly coupled federation", "None of the above"],
      "answer": 2
    },
    {
      "id": "23-10-8",
      "question": "What is(are) the application placement constraint(s) for fog nodes?",
      "options": ["Network constraints", "Interoperability", "Resource constraints", "None of these"],
      "answer": [0, 2]
    },
    {
      "id": "23-10-9",
      "question": "The used for resource management in fog/edge computing are classified on the basis of data flow, control and tenancy.",
      "options": ["Algorithms", "Architectures", "Hardware", "Infrastructure"],
      "answer": 1
    },
    {
      "id": "23-10-10",
      "question": "A CSP has little or no control over remote resources in case of",
      "options": ["Tightly Coupled Federation", "Medium Coupled Federation", "Loosely Coupled Federation", "None of these"],
      "answer": 2
    }
  ],
  "11": [
    {
      "id": "23-11-1",
      "question": "Post-copy and Pre-copy migration approaches are employed in:",
      "options": ["Live Migration process", "Non-live Migration process", "Hybrid Migration process", "None of these"],
      "answer": 0
    },
    {
      "id": "23-11-2",
      "question": "Kubernetes operates at the hardware level.",
      "options": ["True", "False"],
      "answer": 1
    },
    {
      "id": "23-11-3",
      "question": "What is(are) the key advantage(s) of Docker?",
      "options": ["Facilitating microservices", "Modeling networks.", "Packaging software", "None of these"],
      "answer": [0, 1, 2]
    },
    {
      "id": "23-11-4",
      "question": "Which of the following statements is most appropriate about Docker?",
      "options": ["Docker is a platform that allows to build and run but not ship apps.", "Docker is a platform that allows to build and ship but but not to run apps.", "Docker is a platform that allows to build, ship and, run apps.", "Docker is a platform that only allows to ship and run but not to build apps."],
      "answer": 2
    },
    {
      "id": "23-11-5",
      "question": "In Docker utility, is a collection of filesystem layers and some metadata that, if taken together, can be spun up as Docker containers.",
      "options": ["Operating System", "Microservice", "Virtual Machine", "Image"],
      "answer": 3
    },
    {
      "id": "23-11-6",
      "question": "Containers are similar to VMs but they have unrelaxed isolation properties to share the operating system among the applications.",
      "options": ["True", "False"],
      "answer": 1
    },
    {
      "id": "23-11-7",
      "question": "Choose the most appropriate option. Statement 1: Container is a lightweight virtualization technique. Statement 2: Container contains the code and all its dependencies.",
      "options": ["Only statement 1 is true", "Only statement 2 is true", "Both statement 1 and 2 are true", "Both the statements are false"],
      "answer": 2
    },
    {
      "id": "23-11-8",
      "question": "Private Docker registry is a service that stores Docker images.",
      "options": ["True", "False"],
      "answer": 0
    },
    {
      "id": "23-11-9",
      "question": "Docker builds offer enhanced reproducibility and replicability compared to conventional software development approaches.",
      "options": ["True", "False"],
      "answer": 0
    },
    {
      "id": "23-11-10",
      "question": "Given the VM memory size of 1024 GB and the transmission rate of 16 MB/sec What are the total migration time and downtime for non-live VM migration? Choose the most appropriate option.",
      "options": ["20 hours, 25 hours", "18 hours, 18 hours", "16 hours, 16 hours", "24 hours, 20 hours"],
      "answer": 1
    }
  ],
  "12": [
    {
      "id": "23-12-1",
      "question": "Which of the following options is most appropriate for FaaS? Statement 1: Each function in the FaaS platform gets unlimited execution time. Statement 2: Functions are always active and ready for execution.",
      "options": ["Statement 1 is correct but Statement 2 is incorrect.", "Statement 2 is correct but Statement 1 is incorrect.", "Both the statements are correct.", "Both the statements are incorrect."],
      "answer": 3
    },
    {
      "id": "23-12-2",
      "question": "BigQuery is a fully-managed, serverless data warehouse by",
      "options": ["AWS", "Google", "Microsoft", "IBM"],
      "answer": 1
    },
    {
      "id": "23-12-3",
      "question": "are an important distribution mechanism for libraries and custom runtimes in AWS serverless ecosystem.",
      "options": ["Runtimes", "Lambda Layers", "Log streams", "None of these"],
      "answer": 1
    },
    {
      "id": "23-12-4",
      "question": "Which of the following is not a category of research initiative on sustainable cloud computing?",
      "options": ["Renewable Energy", "Capacity planning", "Environment Sandboxing", "None of these"],
      "answer": 2
    },
    {
      "id": "23-12-5",
      "question": "AWS S3 is a fully managed proprietary NoSQL database service that supports key-value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio.",
      "options": ["True", "False"],
      "answer": 1
    },
    {
      "id": "23-12-6",
      "question": "Which of the following is/are the goal of sustainable cloud computing? Choose appropriate option(s).",
      "options": ["Minimizing the energy consumption.", "Increasing reliability of CDCs.", "Maximizing carbon footprint related cost.", "Increasing network traffic"],
      "answer": [0, 1]
    },
    {
      "id": "23-12-7",
      "question": "Runtimes allows you to annotate your function code with custom logging statements which helps you to analyse the execution flow and performance of your AWS Lambda functions.",
      "options": ["True", "False"],
      "answer": 1
    },
    {
      "id": "23-12-8",
      "question": "Serverless covers a wide range of technologies that can be grouped into two categories",
      "options": ["BaaS and YaaS", "FaaS and BaaS", "FaaS and YaaS", "None of these"],
      "answer": 1
    },
    {
      "id": "23-12-9",
      "question": "Which of the following is/are challenges in serverless computing?",
      "options": ["Functions sharing code", "Asynchronous calls", "Adoption of too many technologies", "All of the above"],
      "answer": 3
    },
    {
      "id": "23-12-10",
      "question": "The focus of cloud computing was and the serverless is",
      "options": ["programmers, system administrators", "system administrators, programmers"],
      "answer": 1
    }
  ]
},
      "2024": {
        "1": [
          {
            "id": "2024-1-1",
            "question": "Which of the following fall(s) under the 'essential characteristics' of cloud computing?",
            "options": ["Resource Pooling", "Measured Service", "Rapid Elasticity", "Latency"],
            "answer": [0, 1, 2]
          },
          {
            "id": "2024-1-2",
            "question": "\"Google Doc\" is an example of",
            "options": ["PaaS", "IaaS", "SaaS", "FaaS"],
            "answer": 2
          },
          {
            "id": "2024-1-3",
            "question": "Business-Process-as-a-Service is not a part of XaaS.",
            "options": ["True", "False"],
            "answer": 1
          },
          {
            "id": "2024-1-4",
            "question": "Network Function Virtualization involves the implementation of function in software that can run on a range of industry-standard servers",
            "options": ["network, software", "hardware, software", "hardware, network", "network, hardware"],
            "answer": 3
          },
          {
            "id": "2024-1-5",
            "question": "Which are the following applications for SaaS (Software as a Service) architecture?",
            "options": ["Billing software", "CRM", "App engines", "None of above"],
            "answer": [0, 1]
          },
          {
            "id": "2024-1-6",
            "question": "Web access to commercial software is one of the SaaS characteristics in the cloud computing paradigm.",
            "options": ["True", "False"],
            "answer": 0
          },
          {
            "id": "2024-1-7",
            "question": "In the case of the client-server model: Statement (i) Virtualization is a core concept; Statement (ii) system can scale infinitely",
            "options": ["Only Statement (i) is correct", "Only Statement (ii) is correct", "Both Statements (i) and (ii) are correct", "None of the statements is correct"],
            "answer": 3
          },
          {
            "id": "2024-1-8",
            "question": "Client-server model is always load-balanced",
            "options": ["True", "False"],
            "answer": 1
          },
          {
            "id": "2024-1-9",
            "question": "PaaS (Platform as a Service) brings the benefits: (i) Creation of software (ii) Integration of web services and databases",
            "options": ["Only (i)", "Only (ii)", "Both (i) and (ii)", "Neither (i) nor (ii)"],
            "answer": 2
          },
          {
            "id": "2024-1-10",
            "question": "Which of the following is false?",
            "options": ["Private cloud is dedicated solely to an organization.", "Community cloud is a composition of public and private cloud.", "Public cloud is available to the general public.", "None of these"],
            "answer": 1
          }
        ],
        "2": [
          {
            "id": "2024-2-1",
            "question": "Service-Oriented Architecture (SOA) possess:",
            "options": ["A service provider, service requestor and service broker", "A service provider and service requestor", "A service requestor and service broker", "Only a service broker"],
            "answer": 0
          },
          {
            "id": "2024-2-2",
            "question": "XML is designed to describe",
            "options": ["pricing", "SLA", "data", "service"],
            "answer": 2
          },
          {
            "id": "2024-2-3",
            "question": "SOAP (Simple Object Access Protocol) does not restrict the endpoint implementation technology choices. SOAP is a platform-neutral choice.",
            "options": ["True", "False"],
            "answer": 0
          },
          {
            "id": "2024-2-4",
            "question": "A Cyber-Physical Cloud Computing (CPCC) architectural framework is a environment that can rapidly build, modify and provision cyber-physical systems composed of a set of based sensor, processing, control, and data services.",
            "options": ["system, cloud computing", "cloud computing, system", "system, edge computing", "edge, system computing"],
            "answer": 0
          },
          {
            "id": "2024-2-5",
            "question": "Network Virtualization is a environment that allows service providers to dynamically compose virtual networks.",
            "options": ["networking, single, single", "physical, single, multiple", "networking, multiple, single", "networking, multiple, multiple"],
            "answer": 3
          },
          {
            "id": "2024-2-6",
            "question": "Customized wearable devices for collecting health parameters are the best examples of",
            "options": ["IoHT", "Fog device", "Fog-Cloud interfaced", "Cloud-Fog-Edge-IoHT"],
            "answer": 3
          },
          {
            "id": "2024-2-7",
            "question": "Dew Computing is a paradigm where on-premises computers provide functionality that is of cloud services and is also collaborative with cloud services",
            "options": ["dependant", "independent", "partial dependant", "none of these"],
            "answer": 1
          },
          {
            "id": "2024-2-8",
            "question": "SOAP uses as transport protocol",
            "options": ["UDDI", "SLA", "HTTP", "XML"],
            "answer": 2
          },
          {
            "id": "2024-2-9",
            "question": "Virtual Machine Monitor is also known as",
            "options": ["Cluster Manager", "Virtual Machine Handler", "Virtual Machine Manager", "Hypervisor"],
            "answer": 3
          },
          {
            "id": "2024-2-10",
            "question": "Which of the following is/are XML parser API(s)?",
            "options": ["XaaS (Anything as a Model)", "SAX (Simple API to XML)", "CLI (Command Line Interface)", "DOM (Document Object Model)"],
            "answer": [1, 3]
          }
        ],
        "3": [
          {
            "id": "2024-3-1",
            "question": "Which of the following statement(s) regarding OpenStack storage is/are right?",
            "options": ["Object storage is managed by Cinder", "Both ephemeral storage and block storage are accessible from within VM", "Block storage persists until VM is terminated", "Ephemeral storage is used to run operating system and/or scratch space"],
            "answer": [1, 3]
          },
          {
            "id": "2024-3-2",
            "question": "A task takes time T in a uniprocessor system. In a parallel implementation, the task runs on P processors parallelly. The parallel efficiency is Eff, where 0<Eff<1. What is the time taken by each processor (M) in this implementation?",
            "options": ["M=T", "M=T/(Eff × P)", "M=T/P", "M=(T × Eff)/P"],
            "answer": 1
          },
          {
            "id": "2024-3-3",
            "question": "What does the term \"biasness towards vendors\" imply in the context of SLA monitoring?",
            "options": ["Vendor-driven selection of monitoring parameters", "Customer-driven selection of monitoring parameters", "Balanced approach in monitoring parameters"],
            "answer": 0
          },
          {
            "id": "2024-3-6",
            "question": "Statement 1: In ephemeral storage, the stored objects persist until the VM is terminated. Statement 2: The ephemeral storage is managed by Cinder in OpenStack.",
            "options": ["Statement 1 is TRUE, Statement 2 is FALSE", "Statement 2 is TRUE, Statement 1 is FALSE", "Both statements are TRUE", "Both statements are FALSE"],
            "answer": 0
          },
          {
            "id": "2024-3-7",
            "question": "\"Midsize providers can achieve similar statistical economies to an infinitely large provider\" Does this fall under?",
            "options": ["Correlated demand", "Dependent demand", "Independent demand", "Mixed demand"],
            "answer": 2
          },
          {
            "id": "2024-3-8",
            "question": "Let D(t) and R(t) be the instantaneous demand and resources at time t respectively. If demand is exponential (D(t)=e^t), any fixed provisioning interval (tp) according to the current demands will fall linearly behind.",
            "options": ["TRUE", "FALSE"],
            "answer": 1
          },
          {
            "id": "2024-3-9",
            "question": "Which of the following is/are expected common SLA parameter(s) for both Software-as-a-Service and Storage-as-a-Service models?",
            "options": ["usability", "scalability", "recovery", "None of these"],
            "answer": 1
          },
          {
            "id": "2024-3-10",
            "question": "Data retention and deletion by cloud providers do not fall under one of the SLA requirements.",
            "options": ["True", "False"],
            "answer": 0
          }
        ],
        "4": [
          {
            "id": "2024-4-1",
            "question": "SQL Azure is a cloud-based relational database service that is based on:",
            "options": ["Oracle", "SQL Server", "MySQL", "None"],
            "answer": 1
          },
          {
            "id": "2024-4-2",
            "question": "Microsoft Azure provides",
            "options": ["SaaS", "PaaS", "IaaS", "None"],
            "answer": [0, 1, 2]
          },
          {
            "id": "2024-4-3",
            "question": "Azure App Service plan defines",
            "options": ["Region", "Instance size", "Scale count", "None"],
            "answer": [0, 1, 2]
          },
          {
            "id": "2024-4-4",
            "question": "The OpenStack component - Glance monitors and meters the OpenStack cloud for billing, benchmarking. State True or False.",
            "options": ["True", "False"],
            "answer": 1
          },
          {
            "id": "2024-4-5",
            "question": "GCP: Choose the correct option(s)",
            "options": ["To run your web-application, you need to configure only the Google Storage bucket", "\"gcloud app deploy app yami\" the command can be used to deploy your app to app-engine", "After launching your application to app-engine anyone can view the app at http://YOURPROJECT_ID.appspot.com", "\"gcloud app browse\" - can be used to start the local development server for the application"],
            "answer": [1, 2]
          },
          {
            "id": "2024-4-6",
            "question": "In OpenStack, the different components of Nova (e.g. scheduler, Compute, api etc.) communicates via:",
            "options": ["Message Queues", "Neutron", "Conductor", "Swift"],
            "answer": 0
          },
          {
            "id": "2024-4-7",
            "question": "In OpenStack, is a system for managing networks and IP addresses.",
            "options": ["Nova", "Keystone", "Neutron", "None of these"],
            "answer": 2
          },
          {
            "id": "2024-4-8",
            "question": "Cloud DataStore in GCP is a NoSQL document database built for automatic scaling, high performance, and ease of application development",
            "options": ["True", "False"],
            "answer": 0
          },
          {
            "id": "2024-4-9",
            "question": "GCP: Which one is/are correct statement(s)?",
            "options": ["You can reuse the project ID only after you delete the previous project in GCP", "A CNAME alias is a DNS record that lets you use a URL from your own domain to access resources, such as a bucket and objects, in Cloud Storage using your custom domain URL", "\"Multi-Regional\" Storage class is used for the bucket to stream videos and host hot web content accessed frequently around the world", "\"Nearline\" Storage class is used for the bucket to store data accessed frequently in one part of the world"],
            "answer": [1, 2]
          },
          {
            "id": "2024-4-10",
            "question": "OpenStack: Which IP use is preferred for transferring data to a VM from (i) Another VM in the same cloud (ii) One organization's network",
            "options": ["i. Floating IP, ii. Private IP", "i. Private IP, ii. Floating IP", "Floating IP in both cases", "Private IP in both cases"],
            "answer": 1
          }
        ],
        "5": [
          {
            "id": "2024-5-1",
            "question": "In a SLA negotiation, the provider agreed with the service availability of 98%. The consumer runs the application for X hours/day. At the end of one month [31 days], the total service outage was 12 hrs. However, SLA negotiation (in terms of service availability) is honored.",
            "options": ["X is atleast 19.74", "X is atmost 19.74", "X is exactly 19.74", "Insufficient information"],
            "answer": 0
          },
          {
            "id": "2024-5-2",
            "question": "Average resource demand is 45 units, Baseline (owned) unit cost is 200 units, Time is 10 hours, Peak resource demand is 100 units. If the cloud is cheaper than owning of computer infrastructures, the utility premium is",
            "options": ["Greater than 2.22", "Less than 2.22", "Atleast 4.45", "Atmost 4.45"],
            "answer": 1
          },
          {
            "id": "2024-5-3",
            "question": "In computing, there is a linear relationship between the number of processing cores used and power consumption.",
            "options": ["TRUE", "FALSE"],
            "answer": 0
          },
          {
            "id": "2024-5-4",
            "question": "The takes a series of key/value pairs, processes each and generates zero or more output.",
            "options": ["map function", "partition function", "reduce function", "None of these"],
            "answer": 0
          },
          {
            "id": "2024-5-5",
            "question": "In a MapReduce framework the HDFS block size is 64 MB. We have 6 files of size 64 KB, 65 MB, X MB, Y KB, 67 KB and 127 MB. 24 blocks are created by Hadoop framework. The size of X and Y are respectively [one or more than one options may be correct, select all correct options]:",
            "options": ["66 and 64", "64 and 64", "64 and 66", "128 and 64"],
            "answer": [1, 2]
          },
          {
            "id": "2024-5-6",
            "question": "Which among the following is/are logical resource(s)?",
            "options": ["Network", "Computer", "Database", "Execution"],
            "answer": 3
          },
          {
            "id": "2024-5-7",
            "question": "When load decreases, VM management can be done by",
            "options": ["Live migrate VMs to more utilized nodes", "Shutdown unused nodes", "Migrate VMs to less utilized nodes", "None of these"],
            "answer": [0, 1]
          },
          {
            "id": "2024-5-8",
            "question": "Correspondence between resources required by the users and resources available with the provider is known as",
            "options": ["Resource provisioning", "Resource adaptation", "Resource mapping", "None of these"],
            "answer": 2
          },
          {
            "id": "2024-5-9",
            "question": "Ability or capacity of that system to adjust the resources dynamically to fulfill the requirements of the user is known as",
            "options": ["Resource provisioning", "Resource adaptation", "Resource mapping", "None of these"],
            "answer": 1
          },
          {
            "id": "2024-5-10",
            "question": "Statement 1: Map operation consists of transforming one set of key-value pairs to another. Statement 2: Each reducer groups the results of the map step using the same key.",
            "options": ["Both statements are true", "Both statements are false", "Statement 1 is true and Statement 2 is false", "Statement 1 is false and Statement 2 is true"],
            "answer": 0
          }
        ],
        "6": [
          {
            "id": "2024-6-1",
            "question": "Interception is considered as an attack on",
            "options": ["Confidentiality", "Availability", "Integrity", "Authenticity"],
            "answer": 0
          },
          {
            "id": "2024-6-2",
            "question": "Find the correct statement(s):",
            "options": ["Different types of cloud computing service models provide different levels of security services", "Adapting your on-premises systems to a cloud model requires that you determine what security mechanisms are required and mapping those to controls that exist in your chosen cloud service provider", "Data should be transferred and stored in an encrypted format for security purpose", "All are incorrect statements"],
            "answer": [0, 1, 2]
          },
          {
            "id": "2024-6-3",
            "question": "Which of the following is/are example(s) of passive attack?",
            "options": ["Replay", "Denial of service", "Traffic analysis", "Masquerade"],
            "answer": 2
          },
          {
            "id": "2024-6-4",
            "question": "Modification is considered as an attack on",
            "options": ["Confidentiality", "Availability", "Integrity", "Authenticity"],
            "answer": 2
          },
          {
            "id": "2024-6-5",
            "question": "Spoofing is not an example of",
            "options": ["Deception", "Disclosure", "Usurpation", "Disruption"],
            "answer": [1, 3]
          },
          {
            "id": "2024-6-6",
            "question": "Consider the following statements: Statement I: Authorization is the identification of legitimate users. Statement II: Integrity is the protection against data alteration/corruption.",
            "options": ["Statement I is TRUE and statement II is FALSE", "Statement I is FALSE and statement II is TRUE", "Both statements are TRUE", "Both statements are FALSE"],
            "answer": 1
          },
          {
            "id": "2024-6-7",
            "question": "Access policy control refers to",
            "options": ["Cyclic Inheritance Control", "Virus Attack", "Violation of SoD (separation of duties) Constraint", "Man in the middle attack"],
            "answer": [0, 2]
          },
          {
            "id": "2024-6-8",
            "question": "Which of the options is/are considered as the basic components of security?",
            "options": ["Confidentiality", "Integrity", "Reliability", "Efficiency"],
            "answer": [0, 1]
          },
          {
            "id": "2024-6-9",
            "question": "Which of the following is/are not a type of passive attack?",
            "options": ["Traffic Analysis", "Release of message contents", "Denial of service", "Replay"],
            "answer": [2, 3]
          },
          {
            "id": "2024-6-10",
            "question": "Side channel exploitation has the potential to extract RSA & AES secret keys",
            "options": ["True", "False"],
            "answer": 0
          }
        ],
        "7": [
          {
            "id": "2024-7-1",
            "question": "The key features of mobile cloud computing (MCC) are",
            "options": ["Facilitates the quick development, delivery and management of mobile apps", "Uses more device resources because applications are cloud-supported", "Improves reliability with information backed up and stored in the cloud", "None of these"],
            "answer": [0, 2]
          },
          {
            "id": "2024-7-2",
            "question": "Dynamic runtime offloading involves the issues of",
            "options": ["Runtime application partitioning", "Migration of intensive components", "Continuous synchronization for the entire duration of runtime execution platform", "None of these"],
            "answer": [0, 1, 2]
          },
          {
            "id": "2024-7-3",
            "question": "What is/are true about cloudlet?",
            "options": ["Increases the latency in reaching the cloud servers", "Reduces the latency in reaching the cloud servers", "Resides far from the mobile devices", "Resides near to the mobile devices"],
            "answer": [1, 3]
          },
          {
            "id": "2024-7-4",
            "question": "What is/are true about mobile cloud computing (MCC)?",
            "options": ["MCC increases the running cost for computation intensive applications", "MCC reduces the running cost for computation intensive applications", "MCC decreases battery lifetime", "None of these"],
            "answer": 1
          },
          {
            "id": "2024-7-5",
            "question": "What is/are true about the execution of services in mobile cloud computing (MCC)?",
            "options": ["All services are executed in cloud", "Some services are executed in mobile devices and some services are executed in cloud", "All computation intensive services are executed in mobile devices", "None of these"],
            "answer": 1
          },
          {
            "id": "2024-7-6",
            "question": "What of the following is/are fog device(s)?",
            "options": ["Cellular base stations", "Network routers", "WiFi Gateways", "None of these"],
            "answer": [0, 1, 2]
          },
          {
            "id": "2024-7-7",
            "question": "What is/are the advantage(s) of fog computing?",
            "options": ["Reduction in data movement across the network resulting in reduced congestion", "Increase in data movement across the network resulting in increased congestion", "Serving the real-time applications", "None of these"],
            "answer": [0, 2]
          },
          {
            "id": "2024-7-8",
            "question": "Consider the following statements: Statement 1: In Geospatial Cloud, it is needed to integrate data from heterogeneous back-end data service. Statement 2: Data services can be inside and/or outside of the cloud environment in Geospatial Cloud.",
            "options": ["Statement 1 is Correct, but Statement 2 is Incorrect", "Statement 2 is Correct, but Statement 1 is Incorrect", "Both statements are Correct", "Both statements are Incorrect"],
            "answer": 2
          },
          {
            "id": "2024-7-9",
            "question": "Which of the following statement(s) is/are FALSE about Fog Computing?",
            "options": ["Fog nodes present near to the end-user", "Fog computing enables real-time applications", "Fog nodes' response time is much higher than Cloud's", "Network routers, WiFi Gateways will not be capable of running applications"],
            "answer": [2, 3]
          },
          {
            "id": "2024-7-10",
            "question": "Which of the following is/are true about Geospatial Cloud Model?",
            "options": ["It integrates data from homogeneous back-end data services", "Data services can be inside and/or outside the cloud environment", "Data services inside cloud can be run through SaaS service model", "None of the above"],
            "answer": 1
          }
        ],
        "8": [
          {
            "id": "2024-8-1",
            "question": "An IoT platform's basic building blocks is/are (choose the correct option(s)).",
            "options": ["Gateway", "Images", "Network and Cloud", "Containers"],
            "answer": [0, 2]
          },
          {
            "id": "2024-8-2",
            "question": "is used to delete a local image.",
            "options": ["Docker rm", "Docker rmi", "Docker rvi", "Docker push"],
            "answer": 1
          },
          {
            "id": "2024-8-3",
            "question": "Docker Hub is a registry used to host various docker images.",
            "options": ["True", "False"],
            "answer": 0
          },
          {
            "id": "2024-8-4",
            "question": "enables different networks, spreads in a huge geographical area to connect together and be employed simultaneously by multiple users on demand.",
            "options": ["Serverless", "IoT Cloud", "Sensor Cloud", "Green Cloud"],
            "answer": 2
          },
          {
            "id": "2024-8-5",
            "question": "Virtual machines get virtual access to host resources through a",
            "options": ["Containers", "Hypervisor", "Both a and b", "Images"],
            "answer": 1
          },
          {
            "id": "2024-8-6",
            "question": "Vehicles providing their networking and data processing capabilities to other vehicles through the cloud comes under which service of IoT-based Vehicular Data Clouds.",
            "options": ["SaaS", "PaaS", "IaaS", "None of these"],
            "answer": 2
          },
          {
            "id": "2024-8-7",
            "question": "Sensor data can be easily shared by different groups of users without any extra effort/measure.",
            "options": ["True", "False"],
            "answer": 1
          },
          {
            "id": "2024-8-8",
            "question": "Container is a compile time instance of an image.",
            "options": ["True", "False"],
            "answer": 1
          },
          {
            "id": "2024-8-9",
            "question": "In the context of Green Cloud Computing, the Power Usage Effectiveness is defined as",
            "options": ["Power Delivered / Overall Power", "Overall Power / Power Delivered", "Overall Power * Power Delivered", "None of these"],
            "answer": 1
          },
          {
            "id": "2024-8-10",
            "question": "Statement 1: Sensor-Cloud proxy exposes sensor resources as cloud services. Statement 2: Sensor network is still managed from the Sensor-Cloud Interface via Sensor Network Proxy",
            "options": ["Statement 1 is True and Statement 2 is False", "Statement 2 is True and Statement 1 is False", "Both statements are True", "Both statements are False"],
            "answer": 2
          }
        ],
        "9": [
          {
            "id": "2024-9-1",
            "question": "Which of the following statements best describes fog computing?",
            "options": ["Fog computing refers to a model where data, processing, and applications are concentrated in the cloud rather than at the network edge.", "Fog computing is a term introduced by Cisco Systems to describe a model that centralizes data processing in the cloud to manage wireless data transfer to distributed IoT devices.", "Fog computing is a model where data, processing, and applications are concentrated in devices at the network edge rather than existing almost entirely in the cloud.", "The vision of fog computing is to enable applications on a few connected devices to run directly in the cloud without interaction at the network edge."],
            "answer": 2
          },
          {
            "id": "2024-9-2",
            "question": "Which of the following challenges is most effectively addressed by using fog and edge computing instead of a 'cloud-only' approach for IoT applications?",
            "options": ["Resource management issues related to workload balance and task scheduling in cloud-based environments.", "The inefficiency of processing time-sensitive applications directly in the cloud due to high latency and large data bandwidth requirements.", "The need for improved security and privacy features in cloud-based systems, which are not addressed by fog and edge computing.", "The difficulty in integrating multiple cloud services and platforms for comprehensive IoT data management."],
            "answer": 1
          },
          {
            "id": "2024-9-3",
            "question": "Which of the following correctly describes a classification of resource management architectures in fog/edge computing? Threads of a process share",
            "options": ["Data Flow", "Control", "Tenancy", "Infrastructure"],
            "answer": 2
          },
          {
            "id": "2024-9-4",
            "question": "Which of the following characteristics is NOT typically associated with fog computing infrastructure?",
            "options": ["Location awareness and low latency", "Better bandwidth utilization", "High computational power concentrated solely in the Cloud", "Support for mobility"],
            "answer": 2
          },
          {
            "id": "2024-9-5",
            "question": "In the fog computing paradigm, which of the following accurately describes the relationship between local and global analyses?",
            "options": ["Local analyses are performed exclusively in the Cloud, while global analyses are done at the edge devices.", "Local and global analyses are performed only in the Cloud data centers.", "Local analyses are performed at the edge devices, and global analyses can be either performed at the edge or forwarded to the Cloud.", "Local analyses are conducted by IoT devices, and global analyses are not necessary in fog computing."],
            "answer": 2
          },
          {
            "id": "2024-9-6",
            "question": "What is the primary goal of the application placement problem in the Cloud-Fog-Edge framework?",
            "options": ["To map all applications onto the Cloud servers to maximize computational power.", "To find available resources in the network that satisfy application requirements, respect constraints, and optimize the objective, such as minimizing energy consumption.", "To place all application components on edge devices to ensure low latency.", "To disregard resource capacities and focus solely on network constraints."],
            "answer": 1
          },
          {
            "id": "2024-9-7",
            "question": "Which of the following is an example of an application constraint in the application placement problem on the Cloud-Fog-Edge framework?",
            "options": ["Finite capabilities of CPU and RAM on infrastructure nodes.", "Network latency and bandwidth limitations.", "Locality requirements restricting certain services' executions to specific locations.", "Availability of storage resources in the Fog nodes."],
            "answer": 2
          },
          {
            "id": "2024-9-8",
            "question": "What is the primary purpose of offloading in the context of edge computing?",
            "options": ["To move all data processing from edge nodes to the cloud.", "To augment computing requirements by moving servers, applications, and associated data closer to the network edge.", "To reduce the number of user devices connected to the network.", "To centralize all computational resources in the cloud for better performance."],
            "answer": 1
          },
          {
            "id": "2024-9-9",
            "question": "What is the primary goal of a cloud federation?",
            "options": ["To centralize all cloud services under a single provider.", "To deploy and manage multiple cloud services to meet business needs by collaborating among different Cloud Service Providers (CSPs).", "To limit the geographical reach of cloud services.", "To reduce the number of cloud service providers globally."],
            "answer": 1
          },
          {
            "id": "2024-9-10",
            "question": "Which of the following is a key benefit of forming a cloud federation?",
            "options": ["Centralized control of global cloud services.", "Increased resource utilization and load balancing across multiple Cloud Service Providers (CSPs).", "Reduced collaboration among Cloud Service Providers.", "Limiting the geographical footprint of Cloud Service Providers."],
            "answer": 1
          }
        ],
        "10": [
          {
            "id": "2024-10-1",
            "question": "Why is VM migration important in cloud computing environments?",
            "options": ["To centralize all virtual machines on a single server.", "To efficiently distribute VM load across servers, allowing for system maintenance and operational efficiency.", "To permanently shut down under-utilized servers.", "To increase the number of servers in a data center."],
            "answer": 1
          },
          {
            "id": "2024-10-2",
            "question": "What is the difference between cold (non-live) and hot (live) VM migration?",
            "options": ["Cold migration turns off the VM during migration, while hot migration keeps the VM running.", "Cold migration keeps the VM running during migration, while hot migration turns off the VM.", "Both cold and hot migration suspend the VM during the process.", "Cold migration requires more resources than hot migration."],
            "answer": 0
          },
          {
            "id": "2024-10-3",
            "question": "Which of the following approaches are commonly used in live VM migration?",
            "options": ["Cold-copy and Hot-copy.", "Pre-copy and Post-copy.", "Suspend-copy and Resume-copy.", "Start-copy and End-copy."],
            "answer": 1
          },
          {
            "id": "2024-10-4",
            "question": "Which of the following is a primary concern during VM migration to ensure service continuity?",
            "options": ["Maximizing downtime and total migration time", "Minimizing both downtime and total migration time, and avoiding unnecessary disruption of active services", "Allowing resource contention with the migrating OS to speed up the process", "Ensuring that the migration process takes as long as possible to ensure stability"],
            "answer": 1
          },
          {
            "id": "2024-10-5",
            "question": "Which phase of live VM migration involves suspending the execution of the VM at the source and copying the remaining dirty pages and CPU state to the destination?",
            "options": ["Pre-Copy Phase", "Post-Copy Phase", "Stop-and-Copy Phase", "On-Demand Copy Phase"],
            "answer": 2
          },
          {
            "id": "2024-10-6",
            "question": "What is the primary advantage of the post-copy live memory migration strategy?",
            "options": ["It avoids copying any memory pages from the source to the destination.", "It ensures that memory pages are only copied on demand, potentially reducing unnecessary data transfer.", "It copies all memory pages before stopping the VM at the source.", "It immediately restarts the VM at the source after copying the CPU state."],
            "answer": 1
          },
          {
            "id": "2024-10-7",
            "question": "Which of the following is NOT a requirement for live VM migration?",
            "options": ["Load balancing", "Fault tolerance", "Power management", "Data replication"],
            "answer": 3
          },
          {
            "id": "2024-10-8",
            "question": "In serial VM migration, what happens to the remaining VMs when the first VM enters the stop-and-copy phase?",
            "options": ["They continue to provide services", "They are suspended to prevent memory dirtying", "They start their pre-copy cycle", "They are migrated simultaneously"],
            "answer": 1
          },
          {
            "id": "2024-10-9",
            "question": "What is a key advantage of using containers in cloud computing?",
            "options": ["Containers virtualize the hardware to run multiple operating systems", "Containers are heavyweight virtual machines with extensive resource requirements", "Containers package code and dependencies, allowing applications to run consistently across different environments", "Containers require specific hardware configurations to function properly"],
            "answer": 2
          },
          {
            "id": "2024-10-10",
            "question": "What is the main function of a Docker container image?",
            "options": ["To create a virtual machine with its own operating system", "To package an application along with its code, runtime, system tools, libraries, and settings", "To manage physical hardware resources for applications", "To execute applications directly on the host operating system without isolation"],
            "answer": 1
          }
        ],
        "11": [
          {
            "id": "2024-11-1",
            "question": "Which of the following best describes the key features of dew computing?",
            "options": ["Independence and collaboration", "Independence and centralization", "Collaboration and decentralization", "Connectivity and scalability"],
            "answer": 0
          },
          {
            "id": "2024-11-2",
            "question": "Which of the following best describes serverless computing?",
            "options": ["Developers manage scalability and orchestration of containers.", "Developers run their logic as functions, and the cloud provider manages scalability", "Developers handle all containerization and runtime environments.", "Developers run their applications directly on dedicated servers."],
            "answer": 1
          },
          {
            "id": "2024-11-3",
            "question": "Which of the following best describes Function-as-a-Service (FaaS)?",
            "options": ["Functions run continuously and scale vertically.", "Functions are triggered by events and executed in isolated environments.", "Functions are always active and manage their own scaling.", "Functions are large, continuously running parts of an application."],
            "answer": 1
          },
          {
            "id": "2024-11-4",
            "question": "How does Serverless Computing differ from traditional Cloud Computing?",
            "options": ["It focuses on system administrators and exposes-server management.", "It targets programmers by abstracting server management and simplifying development.", "It requires developers to handle all operational responsibilities.", "It makes cloud software development more complicated."],
            "answer": 1
          },
          {
            "id": "2024-11-5",
            "question": "What is a key benefit of using AWS Lambda for running code?",
            "options": ["You need to manage AWS resources and scaling.", "You have to focus on operating system management and provisioning.", "You upload code and AWS Lambda handles execution and scaling based on events.", "You must manually handle event sources and log streams."],
            "answer": 2
          },
          {
            "id": "2024-11-6",
            "question": "What does Google Cloud Functions primarily handle in terms of execution environment?",
            "options": ["Server-based environments with manual provisioning", "Fully managed environments with automatic scaling", "Local environments requiring extensive server management", "Dedicated virtual machines for each function"],
            "answer": 1
          },
          {
            "id": "2024-11-7",
            "question": "What is the primary focus of Azure Functions for developers?",
            "options": ["Managing and maintaining servers", "Writing code and configuring functions", "Handling infrastructure scaling manually", "Deploying compiled languages only"],
            "answer": 1
          },
          {
            "id": "2024-11-8",
            "question": "What is one major challenge of using renewable energy sources in cloud datacenters?",
            "options": ["High capital costs and unpredictability", "Increased server maintenance requirements", "Higher energy consumption from non-renewable sources", "Decreased system reliability"],
            "answer": 0
          },
          {
            "id": "2024-11-9",
            "question": "What is the primary focus of the power manager component in a sustainable cloud computing datacenter?",
            "options": ["Controlling the temperature of the datacenter", "Managing the power supply from renewable and grid sources", "Handling virtual machine migrations", "Scheduling workloads to balance energy use"],
            "answer": 1
          },
          {
            "id": "2024-11-10",
            "question": "Which component of sustainable cloud computing aims to balance the temperature in cloud datacenters to enhance energy efficiency?",
            "options": ["Application Design", "Capacity Planning", "Cooling Management", "Renewable Energy"],
            "answer": 2
          }
        ],
        "12": [
          {
            "id": "2024-12-1",
            "question": "According to the given definition, which of the following statement(s) is (are) true about dew computing?",
            "options": ["Dew computing is a cloud computing paradigm where all computing is done on the cloud without any reliance on on-premises computers.", "Dew computing is a paradigm where on-premises computers provide functionality that is dependent on cloud services.", "Dew computing is a paradigm where on-premises computers and cloud services are completely isolated from each other and do not collaborate in any way.", "Dew computing is a paradigm where on-premises computers provide functionality that is independent of cloud services and is also collaborative with cloud services."],
            "answer": 3
          },
          {
            "id": "2024-12-2",
            "question": "What are the different aspects of CPS?",
            "options": ["Cyber, physical, and communication only", "Cyber, dynamics, and safety only", "Cyber, physical, computation, dynamics, communication, security, and safety", "Cyber, physical, and computation only"],
            "answer": 2
          },
          {
            "id": "2024-12-3",
            "question": "What is the benefit of 5G's ability to scale down in data rates, power, and mobility for IoT devices?",
            "options": ["It allows for faster data rates and lower latency", "It provides extremely lean and low-cost connectivity solutions", "It enables immersive experiences like VR and AR", "It provides ultra-reliable, low-latency links for mission-critical communications."],
            "answer": 1
          },
          {
            "id": "2024-12-4",
            "question": "Fog-Edge computing leads to increased network congestion",
            "options": ["True", "False"],
            "answer": 1
          },
          {
            "id": "2024-12-5",
            "question": "What is(are) the key feature(s) of Mobile Cloud computing for 5G networks?",
            "options": ["Sharing resources for mobile applications", "Improved reliability due to data storage in the cloud", "Increased resource consumption by mobile applications", "None of these"],
            "answer": [0, 1]
          },
          {
            "id": "2024-12-6",
            "question": "Mobility Analytics utilizes the cloud platform for computation and storage.",
            "options": ["True", "False"],
            "answer": 0
          },
          {
            "id": "2024-12-7",
            "question": "In which computing environment is latency fixed due to the location of application modules at the Area Gateway?",
            "options": ["Fog computing", "Cloud computing", "Serverless Computing", "None of the above"],
            "answer": 0
          },
          {
            "id": "2024-12-8",
            "question": "Resource-constrained low-latency devices drive the need of",
            "options": ["Heterogeneous and distributed computing architectures", "Homogeneous and distributed computing architectures", "Heterogeneous and parallel computing architectures", "Homogeneous and parallel computing architectures"],
            "answer": 0
          },
          {
            "id": "2024-12-9",
            "question": "Customized wearable devices for collecting health parameters are the best examples of",
            "options": ["IoHT", "Fog device", "Fog-Cloud interfaced", "Cloud-Fog-Edge-IoHT"],
            "answer": 3
          },
          {
            "id": "2024-12-10",
            "question": "The cyber-physical system involves transdisciplinary approaches, merging the theory of cybernetics, mechatronics, design, and process science.",
            "options": ["True", "False"],
            "answer": 0
          }
        ]
      }
    
  };
  export default questionsData;