using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Runtime.InteropServices.JavaScript;

namespace API.Comun;

public class ItemFactura
{
    public int Fol { get; set; }
    public int Ver { get; set; }
    public string MetPago { get; set; }
    public int NumCer { get; set; }
    public string ForPago { get; set; }
    public DateTime FecEmi { get; set; }
    public TimeZone HoraEmi { get; set; }
    [Column(TypeName="money")]
    public decimal Subt { get; set; }
    public decimal IVA { get; set; }
    [Column(TypeName="money")]
    public decimal Tot { get; set; }
}