class QualityChanger
  def self.go(params, old_quality)
    if params["dothing"] == "promote"
      promote(old_quality)
    else
      demote(old_quality)
    end
  end

  def self.demote(old_quality)
    if old_quality == "thousand"
      "thousand"
    elsif old_quality == "million"
      "thousand"
    else
      "million"
    end
  end

  def self.promote(old_quality)
    if old_quality == "thousand"
      "million"
    elsif old_quality == "million"
      "billion"
    else
      "billion"
    end
  end
    
end
