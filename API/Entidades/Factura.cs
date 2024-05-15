using System.Data.SqlTypes;

namespace API.Controllers.Entidades;

public class Factura
{
    public int Folio { get; set; }
    public string Version { get; set; }
    public string Metodo_pago { get; set; }
    public int Num_certif { get; set; }
    public string Forma_pago { get; set; }
    public DateTime Fehca_emision { get; set; }
    public SqlMoney Subtotal { get; set; }
    public int IVA { get; set; }
    public SqlMoney Total { get; set; }
}