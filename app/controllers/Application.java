package controllers;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.node.ObjectNode;

import play.*;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {
  
    public static Result index() {
        return ok(index.render("Your new application is ready."));
    }
    
    
    public static Result iform() {
      return ok(iform.render("Your new application is ready."));
    }
    
    @BodyParser.Of(BodyParser.Json.class)
    public static Result addInterest() {
  		ObjectNode result1 = Json.newObject();
  		result1.put("status", "ok");
  		JsonNode json = request().body().asJson();
  		String interestName = json.findPath("interestName").getTextValue();
  		Logger.info(interestName);
			Logger.info("Returning " + result1.toString());
			return ok(result1);

    }
    
    
}
