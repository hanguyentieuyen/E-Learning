import Image from "next/image";
import Ava4 from "../../images/Avatar4.png";
import { BsThreeDots } from "react-icons/bs";
const TableStudentList = () => {
  return (
    <div className="table-student-wrapper card">
      <div className="card-header">
        <div className="table-student-sort">
          <span>Student List</span>
          <select
            class="form-select form-select-sm table-student-select"
            aria-label="Default select example"
          >
            <option selected>Sort by</option>
            <option value="1">All Students</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="card-body">
        <div className="table-wrapper">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="table-col">Student</th>
                <th className="table-col">Student ID</th>
                <th className="table-col">Course Name</th>
                <th className="table-col">Enrolled Date</th>
                <th className="table-col">Status</th>
                <th className="table-col-fix"></th>
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
                <td>
                  <BsThreeDots />
                </td>
              </tr>
              <tr className="table-row-student">
                <td className="table-row-item">
                  <Image src={Ava4} width="50" height="50" />
                  <span>John Doe</span>
                </td>
                <td>#54350</td>
                <td>App Design Course</td>
                <td>12 July,2022</td>
                <td>Complete</td>
                <td>
                  <BsThreeDots />
                </td>
              </tr>
              <tr className="table-row-student">
                <td className="table-row-item">
                  <Image src={Ava4} width="50" height="50" />
                  <span>John Doe</span>
                </td>
                <td>#54350</td>
                <td>App Design Course</td>
                <td>12 July,2022</td>
                <td>Complete</td>
                <td>
                  <BsThreeDots />
                </td>
              </tr>
              <tr className="table-row-student">
                <td className="table-row-item">
                  <Image src={Ava4} width="50" height="50" />
                  <span>John Doe</span>
                </td>
                <td>#54350</td>
                <td>App Design Course</td>
                <td>12 July,2022</td>
                <td>Complete</td>
                <td>
                  <BsThreeDots />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
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
    </div>
  );
};

export default TableStudentList;
