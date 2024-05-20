using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices.JavaScript;

namespace API.Comun;

public class ItemFactura
{
    public int Fol { get; set; }
    public string Ver { get; set; }
    public string MetPago { get; set; }
    public int NumCer { get; set; }
    public string ForPago { get; set; }
    public JSType.Date FecEmi { get; set; }
    [Column(TypeName="money")]
    public decimal Subt { get; set; }
    public int IVA { get; set; }
    [Column(TypeName="money")]
    public decimal Tot { get; set; }
}