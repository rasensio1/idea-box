class QualityChanger
  def self.go(params, old_quality)
    if params["qualityChange"]
      if params["qualityChange"] == "promote"
        promote(old_quality)
      else
        demote(old_quality)
      end
    else
      old_quality
    end
  end

  def self.demote(old_quality)
    options = {"thousand" => "thousand",
               "million" => "thousand",
               "billion" => "million"}
    options[old_quality]
  end

  def self.promote(old_quality)
    options = {"thousand" => "million",
               "million" => "billion",
               "billion" => "billion"}
    options[old_quality]
  end
    
end
