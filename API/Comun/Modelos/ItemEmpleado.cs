using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices.JavaScript;

namespace API.Comun;

public class ItemEmpleado
{
    public int idEmp { get; set; }
    public string Rfc  { get; set; }
    public string Curp { get; set; }
    public string NomEmp { get; set; }
    public JSType.Date Naci { get; set; }
    public int NumSoci { get; set; }
    public string PuestEmp { get; set; }
    [Column(TypeName="money")]
    public decimal SalEmp { get; set; }
    public JSType.Date Contrat { get; set; }
    public string Tel { get; set; }
}