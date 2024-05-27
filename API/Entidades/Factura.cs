
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Runtime.InteropServices.JavaScript;

namespace API.Entidades;

public class Factura
{
    [Key]
    public int Folio { get; set; }
    public int Version { get; set; }
    public string Metodo_Pago { get; set; }
    public int Num_certif { get; set; }
    public string Forma_Pago { get; set; }
    public DateTime Fecha_Emision_Fac { get; set; }
    public TimeSpan Hora_Emision_Fac { get; set; }
    [Column(TypeName="money")]
    public decimal Subtotal_Fac { get; set; }
    public decimal IVA_Fac { get; set; }
    [Column(TypeName="money")]
    public decimal Total_Fac { get; set; }
    //
    public bool Habilitado { get; set; }
    
    //LLAVES FORANEAS
    public int ID_Cli { get; set; }
    public int ID_Gorca { get; set; }
    public virtual Clientes Clientes { get; set; }
    public virtual gorca Gorca { get; set; }
    public virtual ICollection<Producto> Producto { get; set; }
}

