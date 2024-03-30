import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bs1CircleFill } from "react-icons/bs";
// import { BsCameraVideoOffFill } from "react-icons/bs";
// import { BsToggles2 } from 'bootstrap-icons';

/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  return (
    <div className="App">
      <h1 className="visually-hidden">Features examples</h1>

      <div className="container px-4 py-5" id="featured-3"> {/*กล่องครอบทั้งหมด */}

        <h2 className="pb-2 border-bottom">Columns with icons</h2>

        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3"> {/*กล่องครอบกล่อง 3 กล่อง */}
          <div className=" col">
            <div className=" bg-primary bg-gradient">
              <i class="bi bi-apple"></i>
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="javascript:void(0)" >
              Call to action
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>


          <div className="feature col">
            <div className="container h-25 p-2 w-50 bg-primary bg-gradient">
              <Bs1CircleFill className="fs-1" /> {/* หรือ fs-2 */}
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="javascript:void(0)" className="icon-link">
              Call to action
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>


          <div className="feature col">
            <div className="feature-icon bg-primary bg-gradient">
              <i className="bi bi-collection"></i>
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="javascript:void(0)" className="icon-link">
              Call to action
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>


        {/* ============================================== อธิบายการใช้ icon =============================================== */}

        <div style={{ textAlign: 'left' }}>
          <p>การจะใช้ไอคอนได้นั้นจะต้องมีการ install มันมาก่อน ด้วยคำสั่ง</p>
          <div className="py-2 mb-5 ps-2" style={{ textAlign: 'left', backgroundColor: "#C5C5C5" }}>
            <pre>
              <code>
                {`npm i bootstrap-icons`}
              </code>
            </pre>
          </div>

          <p>เมื่อเราติดตั้งเสร็จแล้ว เราก็ต้องมีการ import มันลงมาใช้ในไฟล์ที่จะให้มีการใส่ icon ด้วย</p>
          <div className="py-2 mb-5 ps-2" style={{ textAlign: 'left', backgroundColor: "#C5C5C5" }}>
            <pre>
              <code>
                {`import { Bs1CircleFill } from "react-icons/bs";`}
              </code>
            </pre>
          </div>
          <p>ซึ่งในส่วนของ import นี้สามารถที่จะดึงมาจากเว็บนี้ได้เลย </p>
          <div>
            <a href="https://react-icons.github.io/react-icons/" className="icon-link" target="_blank" rel="noopener noreferrer">
              <p>https://react-icons.github.io/react-icons/</p>
            </a>

          </div>
        </div>

        {/* ============================================== Coding =============================================== */}


        <div style={{ textAlign: 'left', backgroundColor: "#C5C5C5" }}>
          <pre>
            <code>
              {`
        <div className="App">
        <h1 className="visually-hidden">Features examples</h1>
  
        <div className="container px-4 py-5" id="featured-3"> {/*กล่องครอบทั้งหมด */}
  
          <h2 className="pb-2 border-bottom">Columns with icons</h2>
  
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3"> {/*กล่องครอบกล่อง 3 กล่อง */}
                                                                  {/* row-cols-1: เป็นคลาสที่ใช้กำหนดจำนวนคอลัมน์ในแถว ในที่นี้คือ 1 คอลัมน์ */}
                                                                  {/* row-cols-lg-3: เป็นคลาสที่ใช้กำหนดจำนวนคอลัมน์ในแถวสำหรับขนาดหน้าจอขนาดใหญ่ (large screens) 
                                                                  ในที่นี้คือ 3 คอลัมน์ ซึ่งอาจมีการปรับเปลี่ยนตามขนาดของหน้าจอ  */}

            <div className=" col">
              <div className=" bg-primary bg-gradient">
                <i class="bi bi-apple"></i>
              </div>
              <h2>Featured title</h2>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="javascript:void(0)" className="">
                Call to action
                <i className="bi bi-chevron-right"></i>
              </a>
            </div>
  
  
            <div className="feature col">
              <div className="container h-25 p-2 w-50 bg-primary bg-gradient">
                <Bs1CircleFill className="fs-1" /> {/* หรือ fs-2 */}
              </div>
              <h2>Featured title</h2>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="javascript:void(0)" className="icon-link">
                Call to action
                <i className="bi bi-chevron-right"></i>
              </a>
            </div>
  
  
            <div className="feature col">
              <div className="feature-icon bg-primary bg-gradient">
                <i className="bi bi-collection"></i>
              </div>
              <h2>Featured title</h2>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="javascript:void(0)" className="icon-link">
                Call to action
                <i className="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>
      `}
            </code>
          </pre>
        </div>


      </div>
    </div>
  );
}

export default App;
