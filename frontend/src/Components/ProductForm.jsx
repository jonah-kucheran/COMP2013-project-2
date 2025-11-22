export default function ProductForm({ productName, brand, image, price, handleOnSubmit, handleOnChange })
{
    return <div>
        <br />
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="productName" id="productName" placeholder="Product Name" value={productName} onChange={handleOnChange} />
            <br />
            <input type="text" name="brand" id="brand" placeholder="Brand" value={brand} onChange={handleOnChange} />
            <br />
            <input type="text" name="image" id="image" placeholder="Image Link" value={image} onChange={handleOnChange} />
            <br />
            <input type="text" name="price" id="price" placeholder="Price" value={price} onChange={handleOnChange} />
            <br />
            <button>Submit</button>
        </form>
    </div>
}