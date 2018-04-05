# An attempt to convert imperative logic to functional in JS

## Problem: Processing a fictional credit application based on American Credit Score

## Requirements:

1. Ensure the inputs provided are of correct types
2. Ensure credit worthiness is evaluated
3. Process the credit application
4. Form a proper response to the credit application
5. If 1 and/or 2 fails the credit application will not proceed further
6. If 1 and 2 succeed the credit application will be processed

### Sample implementation in Python
```python
def process_credit_application(first_name, last_name, credit_requested, credit_score):
    validation_result = validate_input(first_name, last_name, credit_requested, credit_score)
    if validation_result.is_failure:
        return
    
    business_validation_result = validate_business_rules(first_name, last_name, credit_requested, credit_score)
    if business_validation_result.is_failure:
        return
    credit_factor = business_validation_result.credit_factor
    
    credit_report = compute_credit_worthyness(first_name, last_name, credit_requested, credit_score, credit_factor)
    
    return format_respone(first_name, last_name, credit_requested, credit_score, credit_report.approved_amount)
```