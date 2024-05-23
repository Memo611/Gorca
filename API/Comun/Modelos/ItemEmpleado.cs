using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices.JavaScript;

namespace API.Comun;

public class ItemEmpleado
{
    public int idEmp { get; set; }
    public string Rfc  { get; set; }
    public string Curp { get; set; }
    public string NomEmp { get; set; }
    public string ApeP { get; set; }
    public string ApeM { get; set; }
    public DateTime Naci { get; set; }
    public int NumSoci { get; set; }
    public string PuestEmp { get; set; }
    [Column(TypeName="money")]
    public decimal SalEmp { get; set; }
    public DateTime Contrat { get; set; }
}