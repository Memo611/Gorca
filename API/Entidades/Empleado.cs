using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Runtime.InteropServices.JavaScript;

namespace API.Entidades;

public class Empleado
{
    [Key]
    public int ID_emp { get; set; }
    public string RFC  { get; set; }
    public string CURP { get; set; }
    public string Nombre { get; set; }
    public JSType.Date Fecha_nac { get; set; }
    public int NSS { get; set; }
    public string Puesto { get; set; }
    [Column(TypeName="money")]
    public decimal Salario { get; set; }
    public JSType.Date Fecha_contrat { get; set; }
    public string Telefono { get; set; }
    public bool Habilitado { get; set; }
}