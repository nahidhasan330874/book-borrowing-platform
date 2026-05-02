 

const Category = async() => {
    const res  = await fetch("");
    const categories  = await res.json()
    return (
        <div>
            
        </div>
    );
};

export default Category;