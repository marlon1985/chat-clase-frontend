
export default function MessageList({messages}){
   let mensaje="";
     messages?.map((message)=>(
     mensaje=mensaje+'autor-'+message.autor.nombre+':  '+message.content+'\n'
       ) );
    return(
          <>
     <textarea cols="30" rows="5" value={mensaje} readOnly></textarea>
          </>
       )
}