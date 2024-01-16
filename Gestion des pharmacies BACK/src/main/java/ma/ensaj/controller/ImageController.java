package ma.ensaj.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import ma.ensaj.entities.Image;
import ma.ensaj.entities.Pharmacie;
import ma.ensaj.repository.ImageRepository;
import ma.ensaj.repository.PharmacieRepository;
import ma.ensaj.util.ImageUtility;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:8082") open for specific port
@CrossOrigin() // open for all ports
public class ImageController {

    @Autowired
    ImageRepository imageRepository;
    @Autowired
	private PharmacieRepository repository;
    
    @PostMapping("/upload/image/{id}")
    public ResponseEntity<ImageUploadResponse> uplaodImage(@PathVariable("id") String id,@RequestParam("image") MultipartFile file)
            throws IOException {
        Pharmacie ph = repository.findById(Integer.parseInt(id));
        Image im = Image.builder()
        .name(file.getOriginalFilename())
        .type(file.getContentType())
        .pharmacie(ph)
        .image(ImageUtility.compressImage(file.getBytes())).build();
        imageRepository.save(im);
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ImageUploadResponse("Image uploaded successfully: " +
                        file.getOriginalFilename()));
    }

    @GetMapping(path = {"/get/image/info/{name}"})
    public Image getImageDetails(@PathVariable("name") String name) throws IOException {

        final Optional<Image> dbImage = imageRepository.findByName(name);

        return Image.builder()
                .name(dbImage.get().getName())
                .type(dbImage.get().getType())
                .image(ImageUtility.decompressImage(dbImage.get().getImage())).build();
    }

    @GetMapping(path = {"/get/image/{name}"})
    public ResponseEntity<byte[]> getImage(@PathVariable("name") String name) throws IOException {

        final Optional<Image> dbImage = imageRepository.findByName(name);

        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(dbImage.get().getType()))
                .body(ImageUtility.decompressImage(dbImage.get().getImage()));
    }
    @GetMapping(path = {"/get/imagep/{id}"})
    public ResponseEntity<byte[]> getImagee(@PathVariable("id") String id) throws IOException {
        List<Image> im = imageRepository.findAll();
        Image r = new Image();
        for(Image i : im){
          if(i.getPharmacie()==repository.findById(Integer.parseInt(id)))
           r = i;       
        }

         final Optional<Image> dbImage = Optional.of(r);

        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(dbImage.get().getType()))
                .body(ImageUtility.decompressImage(dbImage.get().getImage()));
    }
}
