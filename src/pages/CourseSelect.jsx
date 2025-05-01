import React from 'react';
import { 
  BookOpen, 
  Cloud, 
  Server,  
  BarChart2,
  Activity 
} from 'react-feather';
import { Container, Row, Col } from 'react-bootstrap';

const CourseSelect = ({ onCourseSelect }) => {
  const courses = [
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      icon: <Cloud size={24} />,
      description: "Infrastructure, virtualization, and deployment models",
      variant: "primary"
    },
    {
      id: "computer-networks",
      title: "Computer Networks & Protocols",
      icon: <Server size={24} />,
      description: "TCP/IP, routing, and network architecture",
      variant: "info"
    },
    {
      id: "data-analytics",
      title: "Data Analytics with Python",
      icon: <BarChart2 size={24} />,
      description: "Statistical analysis, visualization, and ML techniques",
      variant: "success"
    },
    {
      id: "affective-computing",
      title: "Affective Computing",
      icon: <Activity size={24} />,
      description: "Emotion recognition and human-computer interaction",
      variant: "secondary"
    }
  ];

  return (
    <Container fluid className="d-flex flex-column min-vh-100 bg-light">
      {/* Header */}
      <header className="py-3 bg-white shadow-sm">
        <Container>
          <div className="d-flex align-items-center">
            <BookOpen className="me-2 text-primary" size={24} />
            <h1 className="h4 mb-0">NPTEL Study Assistant</h1>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <Container className="flex-grow-1 py-4">
        <div className="text-center mb-4">
          <h2 className="mb-2">Choose Your Course</h2>
          <p className="text-muted">Select a course to start practicing with previous year assignment questions</p>
        </div>

        <Row className="g-4">
          {courses.map((course) => (
            <Col key={course.id} xs={12} md={6}>
              <div 
                className={`card h-100 border-0 shadow-sm cursor-pointer`}
                onClick={() => onCourseSelect(course.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className={`card-body d-flex align-items-center bg-${course.variant} bg-opacity-10 rounded`}>
                  <div className={`me-3 rounded-circle p-3 bg-${course.variant} text-white`}>
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="h5 mb-1">{course.title}</h3>
                    <p className="text-muted small mb-0">{course.description}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="py-3 bg-white border-top">
        <Container>
          <p className="text-center text-muted mb-0 small">
            Made with <span className="text-danger">❤️</span> by <strong>Sai Ganesh Reddy</strong>
          </p>
        </Container>
      </footer>
    </Container>
  );
};

export default CourseSelect;