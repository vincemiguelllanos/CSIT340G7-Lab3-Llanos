const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <div style={styles.partCard}>
      <p style={styles.partTitle}>{props.part.name}</p>
      <span style={styles.unitBadge}>{props.part.exercises} Units</span>
    </div>
  )
}

const Content = (props) => {
  return (
    <div style={styles.contentContainer}>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const totalUnits =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises

  return (
    <div style={styles.totalBox}>
      <p>Total Units: <strong>{totalUnits}</strong></p>
    </div>
  )
}


const Footer = (props) => {
  return (
    <footer style={styles.footer}>
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'BS Information Technology - CIT University'

  const parts = [
    {
      name: 'CSIT340: Industry Elective 1',
      exercises: 3
    },
    {
      name: 'IT317: Project Management',
      exercises: 3
    },
    {
      name: 'CSIT327: Information Management 2',
      exercises: 3
    }
  ]

  
  const studentInfo = {
    fullName: 'Vince Miguel A. Llanos',
    courseCode: 'CSIT340',
    section: 'G5'
  }

  return (
    <div style={styles.container}>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer 
        fullName={studentInfo.fullName} 
        courseCode={studentInfo.courseCode} 
        section={studentInfo.section} 
      />
    </div>
  )
}

const styles = {
  container: {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    maxWidth: '600px',
    margin: '40px auto',
    padding: '24px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    color: '#2d3748'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    margin: '20px 0'
  },
  partCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: '#f7fafc',
    borderLeft: '4px solid #800000',
    borderRadius: '6px'
  },
  partTitle: {
    margin: 0,
    fontWeight: '600'
  },
  unitBadge: {
    backgroundColor: '#800000',
    color: '#ffffff',
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '0.85rem',
    fontWeight: 'bold'
  },
  totalBox: {
    textAlign: 'right',
    paddingTop: '12px',
    borderTop: '1px solid #e2e8f0',
    fontSize: '1.1rem',
    color: '#4a5568'
  },
  footer: {
    marginTop: '30px',
    paddingTop: '16px',
    borderTop: '2px dashed #cbd5e0',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#718096',
    fontWeight: '500'
  }
}

export default App