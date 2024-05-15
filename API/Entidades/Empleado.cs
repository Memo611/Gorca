using System.Data.SqlTypes;

namespace API.Controllers.Entidades;

public class Empleado
{
    public int ID_emp { get; set; }
    public string RFC  { get; set; }
    public string CURP { get; set; }
    public string Nombre { get; set; }
    public DateOnly Fecha_nac { get; set; }
    public int NSS { get; set; }
    public string Puesto { get; set; }
    public SqlMoney Salario { get; set; }
    public DateOnly Fecha_contrat { get; set; }
    public string Telefono { get; set; }
}