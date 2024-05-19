import { Triangle } from 'react-loader-spinner'

const Loaders = () => {
    return (
        <div className='w-screen h-screen gird justify-center items-center '>
          <Triangle
  visible={true}
  height="150"
  width="150"
  color="#2631fc"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />    </div>
    )
}

export default Loaders
