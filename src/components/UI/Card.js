import './card.css'
export default function Card(props){
    const classCard = 'card '+props.className;
    return(
        <div className={classCard} id={props.id}>
            {props.children}
        </div>
    )
}