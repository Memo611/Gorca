using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Runtime.InteropServices.JavaScript;

namespace API.Entidades;

public class Factura
{
    [Key]
    public int Folio { get; set; }
    public string Version { get; set; }
    public string Metodo_pago { get; set; }
    public int Num_certif { get; set; }
    public string Forma_pago { get; set; }
    public JSType.Date Fecha_emision { get; set; }
    [Column(TypeName="money")]
    public decimal Subtotal { get; set; }
    public int IVA { get; set; }
    [Column(TypeName="money")]
    public decimal Total { get; set; }
    public bool Habilitado { get; set; }
    
}