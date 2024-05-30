using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Runtime.InteropServices.JavaScript;

namespace API.Comun;

public class ItemVenta
{
    public int Fol { get; set; }
    public int Ver { get; set; }
    public string MetPago { get; set; }
    public int NumCer { get; set; }
    public string ForPago { get; set; }
    [Column(TypeName="money")]
    public decimal Subt { get; set; }
    public decimal IVA { get; set; }
    [Column(TypeName="money")]
    public decimal Tot { get; set; }
    public int idCliente { get; set; }
    public int idProd { get; set; }
    public int cant  { get; set; }
    public int pmv { get; set; }
    public int importe  { get; set; }
    public decimal descuento  { get; set; }
}