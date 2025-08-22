# 📚 NPTEL Study Assistant

A comprehensive quiz application for practicing NPTEL course assignments with interactive features and responsive design.

![NPTEL Quiz App](https://img.shields.io/badge/NPTEL-Quiz%20App-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## 🎯 Overview

The NPTEL Study Assistant is a web-based quiz application that helps students practice previous year assignment questions from various NPTEL courses. It features both year-wise and unit-wise practice modes with real-time scoring and detailed feedback.

## ✨ Features

### 📖 **Course Selection**
- **4 NPTEL Courses Available:**
  - 🌥️ Cloud Computing
  - 🌐 Computer Networks & Protocols
  - 📊 Data Analytics with Python
  - 🧠 Affective Computing

### 🎮 **Practice Modes**
- **📅 Year-wise Practice:** Select a specific year and practice questions across multiple units
- **📑 Unit-wise Practice:** Focus on a specific unit and practice questions from multiple years

### 🚀 **Interactive Quiz Interface**
- ✅ Real-time answer validation
- 📈 Live progress tracking
- 🏆 Score calculation and display
- 💡 Detailed explanations for answers
- 📱 Fully responsive design for all devices
- 🎨 Course-specific color themes

### 🔧 **Technical Features**
- Single-file HTML application
- No external dependencies required
- Bootstrap 5.3.0 for responsive UI
- Feather Icons for modern iconography
- Vanilla JavaScript for interactivity

## 🗂️ File Structure

```
nptel-quiz/
│
├── index.html                 # Main application file
├── data/                     # Course question data
│   ├── affectiveComputing.js    # Affective Computing questions
│   ├── cloudComputing.js        # Cloud Computing questions
│   ├── computerNetworks.js      # Computer Networks questions
│   └── dataAnalytics.js         # Data Analytics questions
├── assets/                   # Optional assets folder
│   └── images/
├── README.md                 # This documentation
└── LICENSE                   # License file
```

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor (VS Code, Sublime Text, etc.)

### Installation

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/nptel-study-assistant.git
   cd nptel-study-assistant
   ```

2. **Setup Data Files**
   
   Create your question data files in the `data/` folder. Each file should follow this format:
   
   ```javascript
   const questionsData = {
     "2025": {
       "1": [
         {
           id: "25-1-1",
           question: "Your question text here?",
           options: ["Option A", "Option B", "Option C", "Option D"],
           answer: 0, // Index of correct answer (0-based)
           explanation: "Optional explanation text" // Optional field
         }
       ]
     }
   };
   
   // Export for global access
   window.affectiveComputingData = questionsData;
   ```

3. **Run the Application**
   
   **Option 1: Direct File Opening**
   ```bash
   # Simply double-click index.html
   ```
   
   **Option 2: Local Server (Recommended)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
   
   Then open: `http://localhost:8000`

## 📊 Data Format

### Single Choice Questions
```javascript
{
  id: "unique-question-id",
  question: "What is the capital of France?",
  options: ["London", "Berlin", "Paris", "Madrid"],
  answer: 2, // Index 2 = "Paris"
  explanation: "Paris is the capital and largest city of France."
}
```

### Multiple Choice Questions
```javascript
{
  id: "multi-choice-question",
  question: "Which are programming languages?",
  options: ["JavaScript", "HTML", "Python", "CSS"],
  answer: [0, 2], // JavaScript and Python
  explanation: "JavaScript and Python are programming languages, while HTML and CSS are markup/styling languages."
}
```

### Data Structure Hierarchy
```
Year (String)
└── Unit (String)
    └── Questions (Array)
        ├── id (String) - Unique identifier
        ├── question (String) - Question text
        ├── options (Array) - Answer choices
        ├── answer (Number/Array) - Correct answer index(es)
        └── explanation (String, Optional) - Answer explanation
```

## 🎮 How to Use

1. **Select Course:** Choose from 4 available NPTEL courses
2. **Choose Mode:** Pick between Year-wise or Unit-wise practice
3. **Configure Practice:**
   - **Year-wise:** Select a year, then choose units to practice
   - **Unit-wise:** Select a unit, then choose years to practice
4. **Start Quiz:** Begin practicing with randomized questions
5. **Answer Questions:** Click on options and use "Check Answer" to validate
6. **Navigate:** Use Previous/Next buttons to move through questions
7. **Track Progress:** Monitor your score and progress in real-time

## 🎨 Customization

### Adding New Courses
1. Add course configuration in the `courses` object
2. Create corresponding data file in `/data/` folder
3. Update the data loading function

### Modifying Themes
- Course colors are defined in the `courseColors` object
- Bootstrap classes are used for consistent theming
- CSS custom properties can be added for advanced customization

### Adding Features
The modular structure allows easy addition of:
- Timer functionality
- Question categories
- Difficulty levels
- Performance analytics
- Export/import capabilities

## 🛠️ Technical Details

### Dependencies
- **Bootstrap 5.3.0** - UI Framework
- **Feather Icons** - Icon library
- **Vanilla JavaScript** - Core functionality

### Browser Support
- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Single-file architecture for fast loading
- Efficient state management
- Optimized for mobile devices
- No external API calls required

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code style and structure
- Test your changes thoroughly
- Update documentation if needed
- Add meaningful commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Sai Ganesh Reddy** - *Initial work* - Original React application
- **Contributors** - *HTML/CSS/JS Conversion* - See [contributors list](https://github.com/yourusername/nptel-study-assistant/contributors)

## 🙏 Acknowledgments

- NPTEL for providing excellent educational content
- Bootstrap team for the responsive framework
- Feather Icons for beautiful iconography
- All contributors and users of this application

## 📞 Support

If you encounter any issues or have questions:

1. **Check the [Issues](https://github.com/yourusername/nptel-study-assistant/issues)** page
2. **Create a new issue** with detailed description
3. **Contact:** [your-email@example.com](mailto:your-email@example.com)

---

<div align="center">

**Made with ❤️ by Sai Ganesh Reddy**

[⭐ Star this repo](https://github.com/yourusername/nptel-study-assistant) | [🐛 Report Bug](https://github.com/yourusername/nptel-study-assistant/issues) | [💡 Request Feature](https://github.com/yourusername/nptel-study-assistant/issues)

</div>
