import { Button } from "bootstrap";

export default function counter(props) {
    return (
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
            {
                (props.big) ?
                    <div className='timing'>
                        <div className='count'>05</div>
                        <div className='label'>MINUTES</div>
                    </div>
                    :
                    <></>
            }
            {
                (props.big) ?
                    <div className='timing'>
                        <div className='count'>05</div>
                        <div className='label'>SECONDS</div>
                    </div>
                    :
                    <></>
            }
        </div>
    )
}