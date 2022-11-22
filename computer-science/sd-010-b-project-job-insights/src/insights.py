from src import jobs


# req 2
def get_unique_job_types(path):
    all_jobs = jobs.read(path)
    unique_jobs = []
    for job in all_jobs:
        if job["job_type"] not in unique_jobs:
            unique_jobs.append(job["job_type"])
    return unique_jobs


# req 6
def filter_by_job_type(jobs, job_type):
    filter_jobs = []
    for job in jobs:
        if job["job_type"] == job_type:
            filter_jobs.append(job)
    return filter_jobs


# req 3
def get_unique_industries(path):
    all_jobs = jobs.read(path)
    unique_industries = []
    for job in all_jobs:
        if job["industry"] not in unique_industries and job["industry"] != '':
            unique_industries.append(job["industry"])
    return unique_industries


# req 7
def filter_by_industry(jobs, industry):
    filtered_industries = []
    for job in jobs:
        if job["industry"] == industry:
            filtered_industries.append(job)
    return filtered_industries


# req 4
def get_max_salary(path):
    all_salary = jobs.read(path)
    max_salary = []
    for job in all_salary:
        if job["max_salary"] not in max_salary and job["max_salary"] != '':
            try:
                max_salary.append(int(job["max_salary"]))
            except ValueError:
                print("Invalid")
    return max(max_salary)


# req 5
def get_min_salary(path):
    all_salary = jobs.read(path)
    min_salary = []
    for job in all_salary:
        if job["min_salary"] not in min_salary and job["min_salary"] != '':
            try:
                min_salary.append(int(job["min_salary"]))
            except ValueError:
                print("Invalid")
    return min(min_salary)


# req 8
def matches_salary_range(job, salary):
    # https://www.programiz.com/python-programming/methods/built-in/isinstance
    if not ((
        isinstance(job.get("min_salary"), int)
        and isinstance(job.get("max_salary"), int))
    ):
        raise ValueError("Min and max must be int")
    if not isinstance(salary, int):
        raise ValueError("Invalid salary")
    if ("min_salary" not in job and "max_salary" not in job):
        raise ValueError("Min and max must be in jobs")
    if job["min_salary"] > job["max_salary"]:
        raise ValueError("Max_salary must be greater than min_salary")
    salary_match = int(job["min_salary"]) <= salary <= int(job["max_salary"])
    return salary_match


# req 9
def filter_by_salary_range(jobs, salary):
    filtered_salary_range = []
    for job in jobs:
        try:
            if (matches_salary_range(job, salary)):
                filtered_salary_range.append(job)
        except ValueError:
            print("Invalid salary")
    return filtered_salary_range
