import './App.css'
import Crud from './components/Crud'
import CrudWithMongo from './components/CrudWithMongo'
import PropsExample from './components/PropsExample'
import ReactElements from './components/ReactElements'
import StateExample from './components/StateExample'
import UseEffectExample from './components/UseEffectExample'

function App() {
  const data = [{
    heading: "Mern stack development",
    para: "this is the mern stack course"
  },
  {
    heading: "Node js course",
    para: "this is node js course"
  },
  {
    heading: "React js course",
    para: "this is react js course"
  },


  ]
  return (
    <div>
      {/* <PropsExample heading={data[0].heading} para={data[0].para}/>
      <PropsExample heading={data[1].heading} para={data[1].para}/>
      <PropsExample heading={data[2].heading} para={data[2].para}/> */}
      {/* {
        data.map((item,index) => (
          <PropsExample
            key={index}
            heading={item.heading}
            para={item.para}
          />
        ))
      } */}
      {/* simple crud  */}
      {/* <StateExample/> */}
      {/* <Crud/> */}
      {/* <ReactElements/> */}
      <CrudWithMongo />
      {/* <UseEffectExample/> */}
    </div>
  )
}

export default App
