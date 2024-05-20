using System.ComponentModel.DataAnnotations;

namespace API.Entidades;

public class Categoria
{
    [Key]
    public int ID_cat { get; set; }
    public string Nombre_cat { get; set; }
}