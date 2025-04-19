import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CourseSelect = ({ onCourseSelect }) => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-between min-vh-100 text-center"
      // Removed mt-5 to reduce top spacing
    >
      <div>
        <h1 className="mb-3">Choose NPTEL Course</h1> {/* Reduced mb-4 to mb-3 */}
        <p className="mb-3">Select a course to start practicing:</p> {/* Reduced mb-4 to mb-3 */}
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="d-flex flex-column gap-2"> {/* Reduced gap-3 to gap-2 */}
            <Button
              variant="primary"
              size="lg"
              onClick={() => onCourseSelect("cloud-computing")}
            >
              Cloud Computing
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => onCourseSelect("computer-networks")}
            >
              Computer Networks & Protocols
            </Button>

            <Button
              variant="success"
              size="lg"
              onClick={() => onCourseSelect("data-analytics")}
            >
              Data Analytics with Python
            </Button>

            <Button
              variant="info"
              size="lg"
              onClick={() => onCourseSelect("affective-computing")}
            >
              Affective Computing
            </Button>
          </Col>
        </Row>
      </div>

      <footer className="mt-auto text-muted py-2" style={{ fontSize: "0.9rem" }}>
        {/* Reduced py-3 to py-2 for less vertical padding */}
        Made with ❤️ by <strong>Sai Ganesh Reddy</strong>
      </footer>
    </Container>
  );
};

export default CourseSelect;