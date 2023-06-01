const Navbar = () => {
    return (
        <div>
             <span id="nav">
    
    <div id="logo">
       
        <a to={"/"}><h5>WEATHER REPORT </h5></a>
        </div>
     
     <div id="sub">
        <a>SUBSCRIPTION</a>
     </div>
     <div id="login">
        
        <a to={"/Login"}>LOGIN</a>
     </div>


    </span>
        </div>
      );
}
 
export default Navbar;