
import Accessories from './Accessories';
import Electronics from './electronics';
function Categories() {





    return (
        <div className="container">
            <div className='grid  grid-cols-1 lg:grid-cols-4 gap-5  '>
                <Electronics />
                <Accessories />
                <Electronics />
                <Accessories />
            </div>
        </div>
    )
}

export default Categories