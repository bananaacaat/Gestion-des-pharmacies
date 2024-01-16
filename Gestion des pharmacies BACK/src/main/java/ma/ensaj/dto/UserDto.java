package ma.ensaj.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private Long id;

    @NotEmpty(message = "Veuillez entrer un nom valide.")
    private String name;

    @NotEmpty(message = "Veuillez entrer un email valide.")
    @Email
    private String email;

    @NotEmpty(message = "veuillez entrer un mot de passe valable.")
    private String password;
}
