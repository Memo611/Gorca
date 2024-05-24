

 using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Runtime.InteropServices.JavaScript;

namespace API.Entidades;

public class Producto
{
    [Key]
    public int ID_Prod { get; set; }
    public string Marca { get; set; }
    public int Volumen { get; set; }
    public DateTime Fecha_Max_Frescura { get; set; }
    public string Sabor { get; set; }
    public int SKU { get; set; }
    [Column(TypeName="money")]
    public decimal Precio { get; set; }
    public string Obj_Impu { get; set; }
    public int Clave_Unidad { get; set; }
    public int Clave_Prod_Serv { get; set; }
    public string Base_Manual { get; set; }
    public string Descripcion { get; set; }
    public int Cant_Exist { get; set; }
    public int Stock_Min { get; set; }
    public int Stock_Max { get; set; }
    
    public bool Habilitado { get; set; }
    
    public int ID_Cat { get; set; }
    public int ID_Prov { get; set; }
    
    public virtual Proveedores Proveedores { get; set; }
    public virtual Categoria Categoria { get; set; }
    public virtual ICollection<Factura> Factura { get; set; }
    public virtual ICollection<Ticket> Ticket { get; set; }
}
