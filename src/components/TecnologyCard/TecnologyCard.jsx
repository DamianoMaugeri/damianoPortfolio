import styles from './TecnologyCard.module.css'



function TecnologyCard( {element: { name, color }}){
    
    return  <>
    <div className={`${styles.techCard}`}>

        <img src={`img/${name}`} className={styles.cardImg} alt="..."/>
    </div>

    
</>
}

export default TecnologyCard;