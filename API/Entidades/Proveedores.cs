using System.ComponentModel.DataAnnotations;

namespace API.Entidades;

public class Proveedores
{
    [Key]
    public int ID_empresa { get; set; }
    public string RFC { get; set; }
    public string Regimen_fiscal { get; set; }
    public string Nombre_comercial { get; set; }
    public string Calle { get; set; }
    public int Numero { get; set; }
    public string Colonia { get; set; }
    public string Ciudad { get; set; }
    public int CP { get; set; }
    public string Pais { get; set; }
    public string Telefono { get; set; }
    public bool Habilitado { get; set; }
}