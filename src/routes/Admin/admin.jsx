import React, { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  GraduationCap,
  Settings,
  UserPlus,
  Search,
  Plus,
  AlertTriangle,
  Calendar,
  FileText,
  BarChart3,
  School,
  ClipboardList,
} from "lucide-react";
import { useEffect } from "react";
import getDatas from "../../api/Dashboard/getTotalDashboard";
import getTeachers from "../../api/Profesesors/getTeachers";
import getStudents from "../../api/Students/getStudents";
import postStudent from "../../api/Students/postStudent";
import DataTable from "react-data-table-component";

const EduAISystem = () => {
  const [activeSection, setActiveSection] = useState("asignar-cursos");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [totalDashboard, setTotalDashboard] = useState([]);
  const [risk, setRisk] = useState([]);

  useEffect(() => {
    async function getTotalDahsboard() {
      const totalDashboardData = await getDatas(
        "https://apex.oracle.com/pls/apex/eduai/api/get-total-db/"
      );
      setTotalDashboard(totalDashboardData);
    }
    getTotalDahsboard();
  }, []);

  useEffect(() => {
    async function getRisk() {
      const riskData = await getDatas(
        "https://apex.oracle.com/pls/apex/eduai/api/get-riesgo-estudiante-alto/"
      );
      setRisk(riskData);
    }
    getRisk();
  }, []);

  const subjects = [
    "Matemáticas",
    "Física",
    "Química",
    "Biología",
    "Literatura",
    "Historia",
    "Inglés",
    "Educación Física",
  ];
  const grades = [
    "1º",
    "2º",
    "3º",
    "4º",
    "5º",
    "6º",
    "7º",
    "8º",
    "9º",
    "10º",
    "11º",
  ];

  const dashboardStats = {
    students: 1245,
    teachers: 87,
    courses: 156,
    activeEnrollments: 1189,
    highRisk: 23,
    mediumRisk: 67,
    lowRisk: 45,
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "asignar-cursos", label: "Asignar cursos", icon: BookOpen },
    { id: "ver-profesores", label: "Ver profesores", icon: Users },
    { id: "ver-estudiantes", label: "Ver estudiantes", icon: GraduationCap },
    { id: "configuracion", label: "Configuración", icon: Settings },
  ];

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      display: "flex",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    sidebar: {
      width: "256px",
      backgroundColor: "white",
      borderRight: "1px solid #e2e8f0",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    logo: {
      padding: "24px",
      borderBottom: "1px solid #e2e8f0",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    logoIcon: {
      width: "32px",
      height: "32px",
      backgroundColor: "#2563eb",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logoText: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#1e293b",
    },
    nav: {
      flex: 1,
      padding: "16px",
    },
    navList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    navItem: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px",
      borderRadius: "8px",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      transition: "all 0.2s ease",
    },
    navItemActive: {
      backgroundColor: "#eff6ff",
      color: "#2563eb",
      borderRight: "2px solid #2563eb",
    },
    navItemInactive: {
      color: "#374151",
    },
    mainContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    header: {
      backgroundColor: "white",
      borderBottom: "1px solid #e2e8f0",
      padding: "16px 24px",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    },
    headerContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#1e293b",
    },
    headerActions: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    avatar: {
      width: "32px",
      height: "32px",
      backgroundColor: "#dbeafe",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      fontWeight: "500",
      color: "#1e40af",
    },
    main: {
      flex: 1,
      padding: "24px",
    },
    pageTitle: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#1e293b",
      marginBottom: "24px",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      padding: "24px",
      marginBottom: "24px",
    },
    grid: {
      display: "grid",
      gap: "24px",
    },
    gridCols2: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    gridCols3: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    gridCols4: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    statCard: {
      backgroundColor: "white",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      padding: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    statNumber: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#1e293b",
    },
    statLabel: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#64748b",
    },
    button: {
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "8px",
      padding: "12px 16px",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "background-color 0.2s ease",
    },
    buttonSecondary: {
      backgroundColor: "#f1f5f9",
      color: "#475569",
      border: "none",
      borderRadius: "8px",
      padding: "12px 16px",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
    input: {
      width: "100%",
      padding: "12px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.2s ease",
    },
    select: {
      width: "100%",
      padding: "12px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "14px",
      backgroundColor: "white",
      outline: "none",
      cursor: "pointer",
    },
    teacherCard: {
      padding: "24px",
      borderBottom: "1px solid #e2e8f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "background-color 0.2s ease",
    },
    teacherInfo: {
      flex: 1,
    },
    teacherName: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#1e293b",
      marginBottom: "4px",
    },
    teacherDetails: {
      fontSize: "14px",
      color: "#64748b",
      marginBottom: "4px",
    },
    teacherActions: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "500",
    },
    badgeBlue: {
      backgroundColor: "#dbeafe",
      color: "#1e40af",
    },
    riskCard: {
      padding: "24px",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
    },
    riskHigh: {
      backgroundColor: "#fef2f2",
      borderColor: "#fecaca",
    },
    riskMedium: {
      backgroundColor: "#fffbeb",
      borderColor: "#fed7aa",
    },
    riskLow: {
      backgroundColor: "#f0fdf4",
      borderColor: "#bbf7d0",
    },
    riskTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "8px",
    },
    riskTitleHigh: {
      color: "#991b1b",
    },
    riskTitleMedium: {
      color: "#92400e",
    },
    riskTitleLow: {
      color: "#166534",
    },
    riskNumber: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    riskNumberHigh: {
      color: "#7f1d1d",
    },
    riskNumberMedium: {
      color: "#78350f",
    },
    riskNumberLow: {
      color: "#14532d",
    },
    riskDescription: {
      fontSize: "14px",
    },
    riskDescriptionHigh: {
      color: "#dc2626",
    },
    riskDescriptionMedium: {
      color: "#d97706",
    },
    riskDescriptionLow: {
      color: "#16a34a",
    },
  };

  const renderDashboard = () => (
    <div>
      <h2 style={styles.pageTitle}>Panel de Control</h2>

      {/* Stats Cards */}
      <div
        style={{ ...styles.grid, ...styles.gridCols4, marginBottom: "24px" }}
      >
        <div style={styles.statCard}>
          <div>
            <p style={styles.statLabel}>Estudiantes</p>
            <p style={styles.statNumber}>
              {totalDashboard[0]?.total_estudiantes}
            </p>
          </div>
          <GraduationCap size={32} color="#2563eb" />
        </div>

        <div style={styles.statCard}>
          <div>
            <p style={styles.statLabel}>Profesores</p>
            <p style={styles.statNumber}>
              {totalDashboard[0]?.total_profesores}
            </p>
          </div>
          <Users size={32} color="#2563eb" />
        </div>

        <div style={styles.statCard}>
          <div>
            <p style={styles.statLabel}>Cursos</p>
            <p style={styles.statNumber}>
              {totalDashboard[0]?.total_asignaturas}
            </p>
          </div>
          <BookOpen size={32} color="#2563eb" />
        </div>

        <div style={styles.statCard}>
          <div>
            <p style={styles.statLabel}>Matrículas Activas</p>
            <p style={styles.statNumber}>
              {totalDashboard[0]?.total_matriculas}
            </p>
          </div>
          <ClipboardList size={32} color="#2563eb" />
        </div>
      </div>

      {/* Risk Alerts */}
      <div style={styles.card}>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#1e293b",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <AlertTriangle size={20} color="#ef4444" />
          Alertas de Riesgo de Deserción
        </h3>
        <div style={{ ...styles.grid, ...styles.gridCols3 }}>
          <div style={{ ...styles.riskCard, ...styles.riskHigh }}>
            <p style={{ ...styles.riskTitle, ...styles.riskTitleHigh }}>
              Riesgo Alto
            </p>
            <p style={{ ...styles.riskNumber, ...styles.riskNumberHigh }}>
              {risk[0]?.total_riesgo_alto}
            </p>
            <p
              style={{
                ...styles.riskDescription,
                ...styles.riskDescriptionHigh,
              }}
            >
              Requieren atención inmediata
            </p>
          </div>
          <div style={{ ...styles.riskCard, ...styles.riskMedium }}>
            <p style={{ ...styles.riskTitle, ...styles.riskTitleMedium }}>
              Riesgo Medio
            </p>
            <p style={{ ...styles.riskNumber, ...styles.riskNumberMedium }}>
              {risk[0]?.total_riesgo_medio}
            </p>
            <p
              style={{
                ...styles.riskDescription,
                ...styles.riskDescriptionMedium,
              }}
            >
              Necesitan seguimiento
            </p>
          </div>
          <div style={{ ...styles.riskCard, ...styles.riskLow }}>
            <p style={{ ...styles.riskTitle, ...styles.riskTitleLow }}>
              Riesgo Bajo
            </p>
            <p style={{ ...styles.riskNumber, ...styles.riskNumberLow }}>
              {risk[0]?.total_riesgo_bajo}
            </p>
            <p
              style={{
                ...styles.riskDescription,
                ...styles.riskDescriptionLow,
              }}
            >
              Situación estable
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <h2 style={styles.pageTitle}>Asignar cursos a profesores</h2>
            <button
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
            >
              <UserPlus size={16} />
              Agregar profesor
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div style={styles.card}>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#1e293b",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Calendar size={20} color="#2563eb" />
          Actividades Recientes
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "12px",
              borderBottom: "1px solid #f1f5f9",
            }}
          >
            <span style={{ fontSize: "14px", color: "#64748b" }}>
              Nuevo estudiante matriculado - Juan Pérez
            </span>
            <span style={{ fontSize: "12px", color: "#9ca3af" }}>
              Hace 2 horas
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "12px",
              borderBottom: "1px solid #f1f5f9",
            }}
          >
            <span style={{ fontSize: "14px", color: "#64748b" }}>
              Profesor Carlos Rodríguez asignado a Química 10º
            </span>
            <span style={{ fontSize: "12px", color: "#9ca3af" }}>
              Hace 4 horas
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "14px", color: "#64748b" }}>
              Alerta de riesgo generada para estudiante María López
            </span>
            <span style={{ fontSize: "12px", color: "#9ca3af" }}>
              Hace 1 día
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAssignCourses = () => (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h2 style={styles.pageTitle}>Asignar cursos a profesores</h2>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          <UserPlus size={16} />
          Agregar profesor
        </button>
      </div>

      {/* Filters */}
      <div style={styles.card}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Materia
            </label>
            <select
              style={styles.select}
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">Seleccionar materia</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Grado
            </label>
            <select
              style={styles.select}
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="">Seleccionar grado</option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", alignItems: "end" }}>
            <button
              style={{ ...styles.button, width: "100%" }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
            >
              <Search size={16} />
              Buscar profesores
            </button>
          </div>
        </div>
      </div>

      {/* Teachers List */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ padding: "24px", borderBottom: "1px solid #e2e8f0" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1e293b" }}>
            Profesores disponibles
          </h3>
        </div>

        <div>
          {teachers.map((teacher) => (
            <div
              key={teacher.id_profesor}
              style={styles.teacherCard}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#f8fafc")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
            >
              <div style={styles.teacherInfo}>
                <h4 style={styles.teacherName}>{teacher.name}</h4>
                <p style={styles.teacherDetails}>
                  Materias: {teacher.subjects}
                </p>
                <p style={styles.teacherDetails}>Horario: {teacher.schedule}</p>
              </div>

              <div style={styles.teacherActions}>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#2563eb",
                    }}
                  >
                    {teacher.assignedCourses} cursos asignados
                  </p>
                </div>
                <button
                  style={{ ...styles.button, fontSize: "14px" }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#1d4ed8")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#2563eb")
                  }
                >
                  Asignar curso
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  {
    /* Mostrar profesores */
  }
  const [teachers, setTeachers] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    async function getTeachersDatas() {
      const totalDashboardData = await getTeachers(
        "https://apex.oracle.com/pls/apex/eduai/api/teachers/"
      );
      setTeachers(totalDashboardData);
    }
    getTeachersDatas();
  }, []);

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.nombre?.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    {
      name: "Nombre",
      selector: (row) => `${row.nombre} ${row.apellido}`,
      sortable: true,
    },
    {
      name: "Correo",
      selector: (row) => row.correo,
    },
    {
      name: "Teléfono",
      selector: (row) => row.telefono,
    },
    {
      name: "Especialidad",
      selector: (row) => row.especialidad,
    },
    {
      name: "Nivel Académico",
      selector: (row) => row.nivel_academico,
    },
    {
      name: "Acciones",
      cell: (row) => <button onClick={() => handleEdit(row)}>Editar</button>,
      ignoreRowClick: true,
    },
  ];
  const renderTeachers = () => (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Gestión de Profesores
        </h2>
        <button
          style={{
            padding: "8px 12px",
            backgroundColor: "#1d4ed8",
            color: "#fff",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Plus size={16} />
          Nuevo profesor
        </button>
      </div>

      <DataTable
        title="Lista de Profesores"
        columns={columns}
        data={filteredTeachers}
        pagination
        highlightOnHover
        pointerOnHover
        responsive
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "200px",
            }}
          />
        }
      />
    </div>
  );

  /* Mostrar estudiantes */
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    id_usuario: 0,
    identificacion: '',
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    telefono: '',
    id_estudiante: 0,
    id_salon_fk: 1,
    grado: ''
  });

  useEffect(() => {
    async function getStudentsData() {
      const studentsData = await getStudents(
        "https://apex.oracle.com/pls/apex/eduai/api/students/"
      );
      setStudents(studentsData);
    }
    getStudentsData();
  }, []);

  const handleCreateStudent = async () => {
    try {
      const response = await postStudent(
        "https://apex.oracle.com/pls/apex/eduai/api/students/",
        newStudent
      );
      if (response) {
        // Actualizar la lista de estudiantes
        const updatedStudents = await getStudents(
          "https://apex.oracle.com/pls/apex/eduai/api/students/"
        );
        setStudents(updatedStudents);
        setIsModalOpen(false);
        setNewStudent({
          id_usuario: 0,
          identificacion: '',
          nombre: '',
          apellido: '',
          correo: '',
          contrasena: '',
          telefono: '',
          id_estudiante: 0,
          id_salon_fk: 1,
          grado: ''
        });
      }
    } catch (error) {
      console.error('Error al crear el estudiante:', error);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.nombre?.toLowerCase().includes(filterText.toLowerCase())
  );

  const columnsStudents = [
    {
      name: "Nombre",
      selector: (row) => `${row.nombre} ${row.apellido}`,
      sortable: true,
    },
    {
      name: "Correo",
      selector: (row) => row.correo,
    },
    {
      name: "Teléfono",
      selector: (row) => row.telefono,
    },
    {
      name: "Grado",
      selector: (row) => row.grado,
    },
    {
      name: "Fecha de ingreso",
      selector: (row) => row.fecha_ingreso,
    },
    {
      name: "Nombre salón",
      selector: (row) => row.nombre_salon,
    },
    {
      name: "Acciones",
      cell: (row) => <button onClick={() => handleEdit(row)}>Editar</button>,
      ignoreRowClick: true,
    },
  ];

  const renderStudents = () => (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Gestión de Estudiantes
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: "8px 12px",
            backgroundColor: "#1d4ed8",
            color: "#fff",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Plus size={16} />
          Nuevo estudiante
        </button>
      </div>

      <DataTable
        title="Lista de Estudiantes"
        columns={columnsStudents}
        data={filteredStudents}
        pagination
        highlightOnHover
        pointerOnHover
        responsive
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "200px",
            }}
          />
        }
      />

      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '500px'
          }}>
            <h3>Nuevo Estudiante</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
              <input
                type="text"
                placeholder="Identificación"
                value={newStudent.identificacion}
                onChange={(e) => setNewStudent({...newStudent, identificacion: e.target.value})}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <input
                type="text"
                placeholder="Nombre"
                value={newStudent.nombre}
                onChange={(e) => setNewStudent({...newStudent, nombre: e.target.value})}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <input
                type="text"
                placeholder="Apellido"
                value={newStudent.apellido}
                onChange={(e) => setNewStudent({...newStudent, apellido: e.target.value})}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <input
                type="email"
                placeholder="Correo"
                value={newStudent.correo}
                onChange={(e) => setNewStudent({...newStudent, correo: e.target.value})}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={newStudent.contrasena}
                onChange={(e) => setNewStudent({...newStudent, contrasena: e.target.value})}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <input
                type="text"
                placeholder="Teléfono"
                value={newStudent.telefono}
                onChange={(e) => setNewStudent({...newStudent, telefono: e.target.value})}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <input
                type="text"
                placeholder="Grado"
                value={newStudent.grado}
                onChange={(e) => setNewStudent({...newStudent, grado: e.target.value})}
                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleCreateStudent}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#1d4ed8',
                    color: 'white',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderSettings = () => (
    <div>
      <h2 style={styles.pageTitle}>Configuración del Sistema</h2>

      <div style={styles.card}>
        <p style={{ color: "#64748b" }}>
          Configuraciones del sistema, roles, permisos y parámetros de riesgo de
          deserción...
        </p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return renderDashboard();
      case "asignar-cursos":
        return renderAssignCourses();
      case "ver-profesores":
        return renderTeachers();
      case "ver-estudiantes":
        return renderStudents();
      case "configuracion":
        return renderSettings();
      default:
        return renderAssignCourses();
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        {/* Logo */}
        <div style={styles.logo}>
          <div style={styles.logoIcon}>
            <BookOpen size={20} color="white" />
          </div>
          <span style={styles.logoText}>EduAI</span>
        </div>

        {/* Navigation */}
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    style={{
                      ...styles.navItem,
                      ...(isActive
                        ? styles.navItemActive
                        : styles.navItemInactive),
                    }}
                    onMouseOver={(e) => {
                      if (!isActive) {
                        e.target.style.background = "#f8fafc";
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isActive) {
                        e.target.style.background = "transparent";
                      }
                    }}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <div>
              <h1 style={styles.headerTitle}>
                {menuItems.find((item) => item.id === activeSection)?.label ||
                  "Dashboard"}
              </h1>
            </div>
            <div style={styles.headerActions}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#9ca3af",
                }}
              >
                <Search size={20} />
              </button>
              <div style={styles.avatar}>
                <span>A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={styles.main}>{renderContent()}</main>
      </div>
    </div>
  );
};

export default EduAISystem;
