import {apple, bill, google } from '../assets';
import styles, {layout} from '../style';

const Billing = () => {
    return ( 
        <section id='product' className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img src={bill} alt="builing" className='w-[100%] h-[100%] relative z-[5]'/>
                <div className='absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient'/>
                <div className='absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink'/>
            </div>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
                <p className={`${styles.paragraph} max-[470px] mt-5`}>
                    Elit enim sed massa etiam. Mauris eu adipscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttior integer platea placerat.
                </p>
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img src={apple} alt="apple" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
                    <img src={google} alt="google" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
                </div>
            </div>
        </section>
    );
}

export default Billing;