export default function counter(params) {
    return(
        <div className='countdown'>
            <div className='timing'>
                <div className='count'>05</div>
                <div className='label'>Months</div>
            </div>
            <div className='timing'>
                <div className='count'>05</div>
                <div className='label'>WEEKS</div>
            </div>
            <div className='timing'>
                <div className='count'>05</div>
                <div className='label'>DAYS</div>
            </div>
            <div className='timing'>
                <div className='count'>05</div>
                <div className='label'>HOURS</div>
            </div>
        </div>
    )
}