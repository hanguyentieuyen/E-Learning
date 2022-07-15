import Image from "next/image";
import Ava4 from "../../images/Avatar4.png";
const TableStudentList = () => {
  return (
    <div className="table-student-wrapper">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Student</th>
            <th>Student ID</th>
            <th>Course Name</th>
            <th>Enrolled Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row-student">
            <td className="table-row-item">
              <Image src={Ava4} width="50" height="50" />
              <span>John Doe</span>
            </td>
            <td>#54350</td>
            <td>App Design Course</td>
            <td>12 July,2022</td>
            <td>Complete</td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TableStudentList;
